const express  = require("express")
const router = express.Router()
const controller = require("../controllers/contatosController")

router.get("/", controller.getAll)
router.post("/", controller.addContato)

module.exports = router