var mongo = require('mongoose');

module.exports = mongo.model('libros', {
    Articulo: String,
    Cod_Art: Number,
    pvp_no_iva: Number,
    pvp_iva: Number
});