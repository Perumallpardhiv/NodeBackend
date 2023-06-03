const TodoService = require('../services/todo_services');

exports.createTodo = async (req,res,next)=>{
    try{
        const {userId,title, desc} = req.body;
        let todo = await TodoService.createTodo(userId,title,desc);

        res.json({status:true, success:todo});
        console.log("Created Successfully");
    } catch (e){
        console.log("Not Created");
        throw e;
    }
}

exports.userAllTodos = async (req,res,next)=>{
    try{
        const {userId} = req.body;
        let todo = await TodoService.userAllTodos(userId);

        res.json({status:true, success:todo});
        console.log("Got all TODO\'s");
    } catch (e){
        console.log("Not found todos");
        throw e;
    }
}
