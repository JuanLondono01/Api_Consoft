import Usuarios from '../../models/Users.js';


export async function deleteUser(req, res) {
    try {
        const { id } = req.params;

        const deletedUser = await Usuarios.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        return res.status(200).json({ ok: true, message: 'Usuario desactivado' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
