import { Router } from 'express';
import { productsController } from '../controllers/products/products.js';
import verifyToken from '../middlewares/verifyToken.js';
import verifyRole from '../middlewares/verifyRole.js';

const productsRouter = Router();

productsRouter
    .route('/')
    .get(verifyToken, verifyRole(['Administrador']), productsController.getProducts)
    .post(verifyToken, verifyRole(['Administrador']), productsController.createProduct);

productsRouter
    .route('/:id')
    .get(verifyToken, verifyRole(['Administrador']), productsController.getProductById)
    .put(verifyToken, verifyRole(['Administrador']), productsController.updateProduct)
    .delete(verifyToken, verifyRole(['Administrador']), productsController.deleteProduct);

export default productsRouter;
