import Roles from '../../models/Roles.js';

export async function deleteRole(req, res) {
    try {
        const { id } = req.params;

        const deletedRole = await Roles.findByIdAndUpdate(
            id,
            { estado: false },
            { new: true }
        );

        if (!deletedRole) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }

        return res.status(200).json({ ok: true, message: 'Rol desactivado' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
