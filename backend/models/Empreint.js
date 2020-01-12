const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmpreintSchema = new Schema({
    idEmpreint: {
        type: Number,
        required:true
    },
    dateEmpreint: {
        type: String,
        required:true
    },
    dateRendu: {
        type: String
    },
    cneEtudiant: {
        type: String,
        required:true
    },
    IdBook: {
        type: Number,
        required:true
    }
 
}, {
    collection: 'Empreint'
  })

module.exports = mongoose.model('Empreint', EmpreintSchema)