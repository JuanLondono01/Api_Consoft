import { Router } from 'express';
import { productsController } from '../controllers/products/products.js';
import verifyToken from '../middlewares/verifyToken.js';
import verifyRole from '../middlewares/verifyRole.js';

const productsRouter = Router();

productsRouter
    .route('/')
    .get(verifyToken, verifyRole([1, 2]), productsController.getProducts)
    .post(verifyToken, verifyRole([1]), productsController.createProduct);

productsRouter
    .route('/:id')
    .get(verifyToken, verifyRole([1, 2]), productsController.getProductById)
    .put(verifyToken, verifyRole([1]), productsController.updateProduct)
    .delete(verifyToken, verifyRole([1]), productsController.deleteProduct);

export default productsRouter;
