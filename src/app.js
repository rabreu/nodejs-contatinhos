const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

const index = require("./routes/index.js")
const contatos = require("./routes/contatosRoute.js")

app.use("/", index)
// app.use("/contatos", contatos)

module.exports = app