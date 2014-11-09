var mongo = require('mongoose');

module.exports = mongo.model('libros', {
    AñoEd : Number,
    Area : String,
    Articulo : String,
    Clasif :String,
    Cod_Art : Number,
    Coleccion :String,
    Curso : String,
    EAN : Number,
    Etapa : String,
    Familia : String,
    ISBN : String,
    Sello : String,
    Situacion : String,
    SubFamilia : String,
    pvp_iva : Number,
    pvp_no_iva : Number
});