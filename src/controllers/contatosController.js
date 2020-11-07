const { response } = require("express")
const contatoCollection = require("../models/contatoSchema")

const getAll = (request, response) => {
    console.log(`${request.method} ${request.url}`)
    contatoCollection.find((error, contatos) => {
        if(error)
            return response.status(500).send(error)
        return response.status(200).send(contatos)
    })
}

const addContato = (request, response) => {
    console.log(`${request.method} ${request.url}`)
    const contatoBody = request.body
    const contato = new contatoCollection(contatoBody)
    contato.save((error) => {
        if(error)
            switch(error.code) {
                case 11000:
                    return response.status(400).send({"mensagem": "Contatinho duplicado. :/"})
                default:
                    return response.status(400).send(error)
            }
        return response.status(201).send({"mensagem": "Contatinho criado. :D"})
    })
}

module.exports = { 
    getAll,
    addContato
}