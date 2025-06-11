import Roles from '../../models/Roles.js';


export async function updateRole(req, res) {
    try {
        const { id } = req.params;
        const { nombreRol, descripcion, estado } = req.body;

        const updatedRole = await Roles.findByIdAndUpdate(
            id,
            { nombreRol, descripcion, estado },
            { new: true, runValidators: true }
        );

        if (!updatedRole) {
            return res.status(404).json({ message: 'Rol no encontrado' });
        }

        return res.status(200).json({ ok: true, rol: updatedRole });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
