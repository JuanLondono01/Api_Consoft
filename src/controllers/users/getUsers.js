import Usuarios from '../../models/Users.js';
export async function getUsers(req, res) {
    try {
        const usuarios = await Usuarios.find().populate('rol');

        if (usuarios.length == 0) {
            return res.status(404).json({ message: 'No hay usuarios registrados' });
        }

        return res.status(200).json({ ok: true, usuarios });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
