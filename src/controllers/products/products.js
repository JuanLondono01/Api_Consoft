import { createProduct } from './createProducts.js';
import { deleteProduct } from './deleteProduct.js';
import { getProductById } from './getProduct.js';
import { getProducts } from './getProducts.js';
import { updateProduct } from './updateProduct.js';

export const productsController = {
    getProducts,
    createProduct,
    deleteProduct,
    getProductById,
    updateProduct
}