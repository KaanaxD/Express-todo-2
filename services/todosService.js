const { json } = require("express");
let todos = require("../data/todos");

function idIndex(id) {
  return todos.findIndex(function (item) {
    return item.id == id;
  });
}

function todoIndex(id) {
  let index = idIndex(id);
  if (index == -1) {
    throw {
      succes: false,
      message: "Todo tidak ada",
    };
  }

  return {
    succes: true,
    task: todos[index],
  };
}

function addTask(task) {
  let newId = todos[todos.length - 1].id + 1;
  let newTask = {
    id: newId,
    task: task,
    done: false,
  };

  todos.push(newTask);
  return {
    succes: true,
    message: "Task berhasil ditambahkan",
    task: newTask,
  };
}

function doneUpdate(id) {
  let index = idIndex(id);
  if (index == -1) {
    throw {
      succes: false,
      message: "task tidak ditemukan",
    };
  }
  todos[index].done = true;
  return {
    succes: true,
    message: "done diubah menjadi true",
    task: todos[index],
  };
}

function notDoneUpdate(id) {
  let index = idIndex(id);
  if (index == -1) {
    throw {
      succes: false,
      message: "task tidak ditemukan",
    };
  }
  todos[index].done = false;
  return {
    succes: true,
    message: "done diubah menjadi false",
    task: todos[index],
  };
}

function edit(id, newName, newStatus) {
  let index = idIndex(id);
  if (index == -1) {
    throw {
      succes: false,
      message: "task tidak ditemukan",
    };
  }
  todos[index].task = newName
  todos[index].done = newStatus

  return{
    succes: true,
    message: "Nama dan status berhasil diedit",
    task: todos[index]
  }
}

module.exports = {
  todoIndex,
  addTask,
  doneUpdate,
  notDoneUpdate,
  edit,
};
