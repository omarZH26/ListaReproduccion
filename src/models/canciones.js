const mongoose = require('mongoose');
const Schema = mongoose.Schema

var CancionesSchema = new Schema({
    nombre: String,
    artista: String,
    genero: String,
    albun: String
})

module.exports = mongoose.model('Canciones', CancionesSchema);