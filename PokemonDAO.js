const {PokeModel} = require('./Pokemon')

class PokemonDAO {

    async insert(pokemonData) {
        const nuevoPokemon = new PokeModel(pokemonData);
        return nuevoPokemon.save();
    }

    async findAll(){
        return PokeModel.find({});
    }

    async findByName(nombre){
        return PokeModel.findOne({nombre: nombre});
    }

    async update(id, updateData){
        return PokeModel.findByIdAndUpdate(id, updateData, { new: true});
    }

    async delete(id){
        return PokeModel.findByIdAndDelete(id);
    }
    
}

module.exports = {PokemonDAO}