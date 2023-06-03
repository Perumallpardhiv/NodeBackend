const TodoModel = require('../model/todo_model');

class TodoService {
    static async createTodo(userId, title, desc){
        try {
            const createTodo = new TodoModel({userId, title, desc});
            return await createTodo.save();
        } catch (e) {
            throw e;
        }
    }
}

module.exports = TodoService;
