import { Router } from 'express';
import { usersController } from '../controllers/users/users.js';
import verifyToken from '../middlewares/verifyToken.js';
import verifyRole from '../middlewares/verifyRole.js';

const usersRouter = Router();

usersRouter.route('/').get(verifyToken, usersController.getUsers);

usersRouter
    .route('/:id')
    .get(verifyToken, verifyRole(['Administrador']), usersController.getUserById)
    .put(verifyToken, verifyRole(['Administrador']), usersController.updateUser)
    .delete(verifyToken, verifyRole(['Administrador']), usersController.deleteUser);

export default usersRouter;
