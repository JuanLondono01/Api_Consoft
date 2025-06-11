import mongoose, { Schema } from 'mongoose';

const productsSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    precioBase: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    id_categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true,
    },
    estado: {
        type: Boolean,
        required: false,
        default: true,
    },
    fechaCreacion: {
        type: Date,
        required: false,
        default: Date.now(),
    },
});

export default mongoose.model('Product', productsSchema);
