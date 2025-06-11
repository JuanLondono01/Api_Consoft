import Roles from '../../models/Roles.js';

export async function getRoleById(req, res) {
    try {
        const { id } = req.params;

        const rol = await Roles.findById(id);
        if (!rol) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }

        return res.status(200).json({ ok: true, rol });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
