import Usuarios from '../../models/Users.js';


export async function getUserById(req, res) {
    try {
        const { id } = req.params;

        const usuario = await Usuarios.findById(id).populate('rol');

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        return res.status(200).json({ ok: true, usuario });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
