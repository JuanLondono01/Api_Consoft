import bcrypt from 'bcryptjs';
import Usuario from '../../models/Users.js';
import mongoose from 'mongoose';
import Roles from '../../models/Roles.js';

export async function registerUser(req, res) {
    try {
        const { nombre, correo, direccion, telefono, password, rol } = req.body;

        // Validar campos
        if (!nombre || !correo || !direccion || !telefono || !password || !rol) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const rolExistente = await Roles.findById(rol);
        if (!rolExistente) {
            return res.status(400).json({ message: 'Rol no válido' });
        }

        // Verificar si el correo ya está registrado
        const existe = await Usuario.findOne({ correo });
        if (existe) {
            return res.status(400).json({ message: 'El correo ya está registrado' });
        }

        // Encriptar la contraseña
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // Crear usuario
        const nuevoUsuario = new Usuario({
            nombre,
            correo,
            direccion,
            telefono,
            password: hashedPassword,
            rol: new mongoose.Types.ObjectId(rol),
        });

        await nuevoUsuario.save();

        return res.status(201).json({ ok: true, message: 'Usuario registrado correctamente' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
}
