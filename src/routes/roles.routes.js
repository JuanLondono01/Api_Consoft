import { Router } from 'express';
import { rolesController } from '../controllers/roles/roles.js';
import verifyToken from '../middlewares/verifyToken.js';
import verifyRole from '../middlewares/verifyRole.js';

const rolesRouter = Router();

rolesRouter
    .route('/')
    .get(verifyToken, verifyRole([1]), rolesController.getRoles)
    .post(verifyToken, verifyRole([1]), rolesController.createRole);

rolesRouter
    .route('/:id')
    .get(verifyToken, verifyRole([1]), rolesController.getRoleById)
    .put(verifyToken, verifyRole([1]), rolesController.updateRole)
    .delete(verifyToken, verifyRole([1]), rolesController.deleteRole);

export default rolesRouter;
