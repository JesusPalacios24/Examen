const mongoose = require('mongoose');

let Schema =  mongoose.Schema;

let PintoresSchema =  new Schema({
    nombre:{
        type: String, 
        required: [true, 'Requerimos el nombre']
    },
    corriente:{
        type: String,
        required:[true, 'Requerimos el estilo']
    },
    nacionalidad:{
        type: String,
        required:[true, 'Requerimos la nacionalidad']
    },
    pintura:{
        type: String
        
    }

});

module.exports = mongoose.model('Pintores', PintoresSchema);