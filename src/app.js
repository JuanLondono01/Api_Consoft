import express from 'express';
import dotenv from 'dotenv/config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import db from './database.js';
import usersRouter from './routes/users.routes.js';
import rolesRouter from './routes/roles.routes.js';
import productsRouter from './routes/products.routes.js';
import authRouter from './routes/auth.routes.js';

const app = express();

//Midlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Settings
app.set('port', process.env.SERVER_PORT);
db();

//Rutas
app.use('/users', usersRouter)
app.use('/roles', rolesRouter)
app.use('/products', productsRouter)
app.use('/auth', authRouter)

//Inicio del servidor
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});
