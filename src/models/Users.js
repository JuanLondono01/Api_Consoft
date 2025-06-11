import mongoose, { Schema } from 'mongoose';
import rolesSchema from './Roles.js';

const usersSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    rol: {
        type: Schema.Types.ObjectId,
        ref: 'Rol',
        required: true,
    },
    estado: {
        type: Boolean,
        required: true,
        default: true,
    },
    fechaCreacion: {
        type: Date,
        required: false,
        default: Date.now(),
    },
});

export default mongoose.model('Usuario', usersSchema);
