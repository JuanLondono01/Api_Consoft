import { Router } from 'express';
import { authController } from '../controllers/auth/auth.js';

const authRouter = Router();

authRouter.route('/login')
.post(authController.loginUser)


authRouter.route('/register')
.post(authController.registerUser)


export default authRouter;