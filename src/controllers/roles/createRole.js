import Roles from '../../models/Roles.js';

export async function createRole(req, res) {
    try {
        const { nombreRol, descripcion } = req.body;

        if (!nombreRol || !descripcion) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const newRole = new Roles({
            nombreRol,
            descripcion,
        });

        const savedRole = await newRole.save();
        return res.status(201).json({ ok: true, rol: savedRole });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
