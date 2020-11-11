const { response } = require("express")
const { find } = require("../models/contatoSchema")
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
    console.log(`${request.method} /contatos${request.url}`)
    const contatoBody = request.body
    const contato = new contatoCollection(contatoBody)
    contato.save((error, contato) => {
        if(error)
            switch(error.code) {
                case 11000:
                    return response.status(400).send({"mensagem": "Contatinho duplicado. :/"})
                default:
                    return response.status(400).send(error)
            }
        return response.status(201).send({
            mensagem: "Contatinho criado. :D",
            contato
        })
    })
}

const getById = (request, response) => {
    console.log(`${request.method} /contatos${request.url}`)
    const id = request.params.id
    contatoCollection.findById(id, (error, contato) => {
        if(error)
            return response.status(500).send(error)
        if(contato.length < 1)
            return response.status(404).send({"mensagem": "Contatinho não existe. :("})
        return response.status(200).send(contato)
    })
}

const getByNome = (request, response) => {
    console.log(`${request.method} /contatos${request.url}`)
    const nome = request.params.nome
    contatoCollection.find({ "nome": nome }, (error, contato) => {
        console.log(contato)
        if(error)
            return response.status(500).send(error)
        if(contato.length < 1)
            return response.status(404).send({"mensagem": "Contatinho não existe. :("})
        return response.status(200).send(contato)
    })
}

const deleteContato = (request, response) => {
    console.log(`${request.method} /contatos${request.url}`)
    const id = request.params.id
    contatoCollection.findByIdAndDelete(id, (error) => {
        if(error)
            return response.status(500).send(error)
        if(contato.length < 1)
            return response.status(404).send({"mensagem": "Contatinho não existe. :("})
        return response.status(200).send({
            "mensagem": "Bye bye, ex-contatinho!"
        })
    })

}

const updateTelefoneContato = (request, response) => {
    console.log(`${request.method} /contatos${request.url}`)
    const id = request.params.id
    const celular = request.body.celular

    contatoCollection.findByIdAndUpdate(id, { "celular": celular }, (error, contato) => {
        if(error)
            return response.status(500).send(error)
        if(contato.length < 1)
            return response.status(404).send({"mensagem": "Contatinho não existe. :("})
        return response.status(200).send({
            mensagem: "Telefone do contatinho atualizado. :D",
            contato
        })
    })
}

const updateContato = (request, response) => {
    console.log(`${request.method} /contatos${request.url}`)
    const id = request.params.id
    const bodyContato = request.body
    delete bodyContato["_id"]
    contatoCollection.findByIdAndUpdate(id, bodyContato, { "new": true }, (error, contato) => {
        if(error)
            return response.status(500).send(error)
        if(contato.length < 1)
            return response.status(404).send({"mensagem": "Contatinho não existe. :("})
        return response.status(200).send({
            mensagem: "Contatinho atualizado. :D",
            contato
        })
    })
}

module.exports = { 
    getAll,
    addContato,
    getById,
    getByNome,
    deleteContato,
    updateTelefoneContato,
    updateContato
}