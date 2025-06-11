import Productos from '../../models/Productos.js';


export async function deleteProduct(req, res) {
    try {
        const { id } = req.params;

        const deletedProduct = await Productos.findByIdAndDelete(id);


        if (!deletedProduct) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        return res.status(200).json({ ok: true, message: "Producto eliminado" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
