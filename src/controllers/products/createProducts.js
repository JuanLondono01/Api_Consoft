import Productos from '../../models/Productos.js';



export async function createProduct(req, res) {
    try {
        const { nombre, descripcion, precioBase, stock, id_categoria } = req.body;

        if (!nombre || !descripcion || !precioBase || !stock || !id_categoria) {
            return res.status(400).json({ message: "Faltan datos requeridos" });
        }

        const newProduct = new Productos({
            nombre,
            descripcion,
            precioBase,
            stock,
            id_categoria,
        });

        const savedProduct = await newProduct.save();
        return res.status(201).json({ ok: true, product: savedProduct });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
