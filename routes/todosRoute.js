let express = require("express");
let router = express.Router();
let { getTodos, getById, postTodo,doneTodo,notDoneTodo } = require("../controllers/todosController");

router.get("/", getTodos);
router.get("/:id", getById);
router.post("/",postTodo)
router.patch("/:id/done",doneTodo)
router.patch("/:id/false",notDoneTodo)

module.exports = router;
