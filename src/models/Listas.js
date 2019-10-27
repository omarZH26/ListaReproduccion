const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Canciones = mongoose.model('Canciones');

var ListaSchema = new Schema({
    nombre: String,
    cancion: [{type: Schema.ObjectId, ref: "Canciones"}]
})

module.exports = mongoose.model('Lista', ListaSchema);