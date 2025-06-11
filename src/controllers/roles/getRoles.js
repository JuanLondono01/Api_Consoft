import Roles from '../../models/Roles.js';

export async function getRoles(req, res) {
    try {
        const roles = await Roles.find();

        if (roles.length == 0 ) {
            return res.status(404).json({message: "No hay roles"})
        }

        return res.status(200).json({ ok: true, roles });
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Internal server error"})
    }
}