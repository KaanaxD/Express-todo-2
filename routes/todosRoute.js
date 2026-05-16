let express = require("express");
let router = express.Router();
let {
  getTodos,
  getById,
  postTodo,
  doneTodo,
  notDoneTodo,
  editTask,
  deleteTask,
} = require("../controllers/todosController");

router.get("/", getTodos);
router.get("/:id", getById);
router.post("/", postTodo);
router.patch("/:id/done", doneTodo);
router.patch("/:id/false", notDoneTodo);
router.put("/:id", editTask);
router.delete("/:id",deleteTask)

module.exports = router;
