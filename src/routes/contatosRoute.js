const express  = require("express")
const router = express.Router()
const controller = require("../controllers/contatosController")

router.get("/", controller.getAll)
router.post("/", controller.addContato)
router.get("/:id", controller.getById)
router.get("/por_nome/:nome", controller.getByNome)

module.exports = router