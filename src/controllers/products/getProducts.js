import Productos from '../../models/Productos.js';

export async function getProducts(req, res) {
    try {
        const products = await Productos.find().populate("id_categoria");


        if (products.length == 0) {
            return res.status(404).json({message: "No hay productos"})
        }

        return res.status(200).json({ok: true, products})

    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Internal server error"})
    }
}