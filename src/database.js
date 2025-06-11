import mongoose from 'mongoose'

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Base de datos conectada");
    } catch (error) {
        console.log("Error conectando la base de datos");
        console.log(error.message);
        
    }
}

export default db;