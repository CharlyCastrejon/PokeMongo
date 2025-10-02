const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    tipo: {
        type: String,
        required: true
    },
    peso: {
        type: Number
    },
    altura: {
        type: Number
    }
}, {
    timestamps: true
})

const PokeModel = mongoose.model('Pokemon', PokemonSchema)

module.exports = {PokeModel}