import Productos from '../../models/Productos.js';


export async function updateProduct(req, res) {
    try {
        const { id } = req.params;
        const { nombre, descripcion, precioBase, stock, id_categoria, estado } = req.body;

        const updatedProduct = await Productos.findByIdAndUpdate(
            id,
            { nombre, descripcion, precioBase, stock, id_categoria, estado },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        return res.status(200).json({ ok: true, product: updatedProduct });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
