import { Router } from 'express';
import { usersController } from '../controllers/users/users.js';
import verifyToken from '../middlewares/verifyToken.js';
import verifyRole from '../middlewares/verifyRole.js';

const usersRouter = Router();

usersRouter.route('/').get(verifyToken, verifyRole([1]), usersController.getUsers);

usersRouter
    .route('/:id')
    .get(verifyToken, verifyRole([1, 2]), usersController.getUserById)
    .put(verifyToken, verifyRole([1, 2]), usersController.updateUser)
    .delete(verifyToken, verifyRole([1, 2]), usersController.deleteUser);

export default usersRouter;
