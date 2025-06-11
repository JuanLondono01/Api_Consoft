import Usuarios from '../../models/Users.js';


export async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const { nombre, correo, direccion, telefono, password, rol, estado } = req.body;

        const updatedUser = await Usuarios.findByIdAndUpdate(
            id,
            { nombre, correo, direccion, telefono, password, rol, estado },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        return res.status(200).json({ ok: true, usuario: updatedUser });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
