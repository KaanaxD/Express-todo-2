let express = require("express")
let router = express.Router()
let getTodos = require("../controllers/todosController")

router.get("/",getTodos)

module.exports = router