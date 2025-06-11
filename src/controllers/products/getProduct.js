import Productos from '../../models/Productos.js';


export async function getProductById(req, res) {
    try {
        const { id } = req.params;
        const product = await Productos.findById(id).populate("id_categoria");

        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        return res.status(200).json({ ok: true, product });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
