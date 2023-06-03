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

    static async userAllTodos(userId){
        try {
            const userTodos = await TodoModel.find({userId});
            return userTodos;
        } catch (e) {
            throw e;
        }
    }

    static async deleteTodo(id){
        try {
            const deleted = await TodoModel.findOneAndDelete({_id:id});
            return deleted;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = TodoService;
