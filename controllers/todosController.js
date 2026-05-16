let todos = require("../data/todos");
let { todoIndex, addTask, doneUpdate, notDoneUpdate, edit } = require("../services/todosService");

function getTodos(req, res) {
  res.json({
    succes: true,
    todos,
  });
}

function getById(req, res) {

    try {
        res.json(todoIndex(req.params.id));
    } catch (error) {
        res.status(404).json(error)
    }
}

function postTodo(req, res) {
    try {
        res.json(addTask(req.body.task));
    } catch (error) {
        res.status(404).json(error)
    }
}

function doneTodo(req, res) {
    try {
        res.json(doneUpdate(req.params.id));
    } catch (error) {
        res.status(404).json(error)
    }
}

function notDoneTodo(req, res) {
    try {
        res.json(notDoneUpdate(req.params.id));
    } catch (error) {
        res.status(404).json(error)
    }
}

function editTask(req,res){
    try {
        res.json(edit(req.params.id,req.body.task,req.body.status));
    } catch (error) {
        res.status(404).json(error)
    }
}


module.exports = {
  getTodos,
  getById,
  postTodo,
  doneTodo,
  notDoneTodo,
  editTask
};
