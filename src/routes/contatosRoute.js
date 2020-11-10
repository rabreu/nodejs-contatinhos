const express  = require("express")
const { deleteContato, updateContato } = require("../controllers/contatosController")
const router = express.Router()
const controller = require("../controllers/contatosController")

router.get("/", controller.getAll)
router.post("/", controller.addContato)
router.get("/id/:id", controller.getById)
router.get("/nome/:nome", controller.getByNome)
router.delete("/deletar/:id", controller.deleteContato)
router.put("/atualizar/:id", controller.updateContato)
router.patch("/atualizar/telefone/:id", controller.updateTelefoneContato)

module.exports = router