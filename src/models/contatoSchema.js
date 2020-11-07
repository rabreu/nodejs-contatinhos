const mongoose = require("mongoose")
const Schema = mongoose.Schema

const contatoSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true,
        unique: true
    },
    celular: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    fotoPerfil: {
        type: String,
        required: false
    }
})

const contatoCollection = mongoose.model('contato', contatoSchema)

module.exports = contatoCollection