const mongoose = require("mongoose")

const uri = "mongodb://localhost:27017/PokeMongo"

async function connectDB(){
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(uri);
            console.log("Conectado a MongoDB");
        } else {
            console.log("Ya se puede conectar")
        }
    } catch (error) {
        console.error("Error al conectarse a MongoDB", error)
    }
}

async function closeDB() {
    if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
        console.log("Se ha desconectado.")
    }
}

module.exports = {connectDB, closeDB}