import { Router } from 'express';
import { rolesController } from '../controllers/roles/roles.js';
import verifyToken from '../middlewares/verifyToken.js';
import verifyRole from '../middlewares/verifyRole.js';

const rolesRouter = Router();

rolesRouter
    .route('/')
    .get(verifyToken, verifyRole(['Administrador']), rolesController.getRoles)
    .post(verifyToken, verifyRole(['Administrador']), rolesController.createRole);

rolesRouter
    .route('/:id')
    .get(verifyToken, verifyRole(['Administrador']), rolesController.getRoleById)
    .put(verifyToken, verifyRole(['Administrador']), rolesController.updateRole)
    .delete(verifyToken, verifyRole(['Administrador']), rolesController.deleteRole);

export default rolesRouter;
