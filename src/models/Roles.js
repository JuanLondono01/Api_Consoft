import mongoose, { Schema } from 'mongoose';

const rolesSchema = new Schema({
    nombreRol: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
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
        default: Date.now,
    },
});


export default mongoose.model('Rol', rolesSchema, 'Rol');
