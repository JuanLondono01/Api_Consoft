import bcrypt from 'bcryptjs';
import Usuario from '../../models/Users.js';
import jwt from 'jsonwebtoken';

export async function loginUser(req, res) {
    try {
        const { correo, password } = req.body;

        // Validar datos
        if (!correo || !password) {
            return res.status(400).json({ message: 'Correo y contraseña son obligatorios' });
        }

        const usuario = await Usuario.findOne({ correo }).populate('rol');

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        if (!usuario.estado) {
            return res.status(403).json({ message: 'Usuario desactivado' });
        }

        // Comparar contraseñas
        const match = bcrypt.compareSync(password, usuario.password);
        if (!match) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({id: usuario._id}, process.env.JWT_SECRET, {expiresIn: '1d'})

        return res.status(200).json({
            ok: true,
            message: 'Inicio de sesión exitoso',
            token,
            usuario: {
                id: usuario._id,
                nombre: usuario.nombre,
                correo: usuario.correo,
                rol: usuario.rol.nombreRol,
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
}
