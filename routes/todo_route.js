const router = require("express").Router();

const TodoContoller = require('../controller/todo_controller');

router.post('/storeTodo', TodoContoller.createTodo);

router.get('/getUserallTodoList', TodoContoller.userAllTodos);

module.exports = router;
