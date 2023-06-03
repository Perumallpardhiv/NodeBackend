const router = require("express").Router();

const TodoContoller = require('../controller/todo_controller');

router.post('/storeTodo', TodoContoller.createTodo);

router.post('/getUserallTodoList', TodoContoller.userAllTodos);

router.post('/deleteTodo', TodoContoller.deleteTodo);

module.exports = router;
