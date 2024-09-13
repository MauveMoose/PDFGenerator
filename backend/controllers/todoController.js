//The controller contains all the commands that interact with, or "control" the database i.e. code to get data, send data etc.

//This imports the schema from "models". The schema is used to determine the format of data retreieved from or stored to the database
const ToDo = require('../models/todoSchema');

//Controller that creates a new document- i.e. saves a given piece of information in the database
exports.createTodo = async(req, res) => {
    try{
    let todo = new ToDo(req.body)
    await todo.save()
    res.json({success: true})
    }

    //If the saving fails, sends back a json document saying "success: false, error:error"
    catch(error){
        res.json({success:false, error: error})
    }
}

//Controller to retrieve all values from the database
exports.getAllTodo = async(req, res) => {
    try{
        const todos = await ToDo.find();
        res.json({success:true, data:todos});
    }

    //If the retrieval fails, sends back a json document saying "success: false, error:error"
    catch(error){
        res.json({success:false, error:error});
    }
}

//Controller to retrieve a specific document based on the input id. Notice how the format is the same as the other controllers
exports.getTodoById = async(req, res) => {
    try{
        const todo = await ToDo.findById(req.params.id);
        res.json({success:true, data:todo});
    }
    catch(error){
        res.json({success:false, error:error});
    }
}

//Controller to delete a specific document based on the input id
exports.deleteTodoById = async(req, res) => {
    try{
        const todo = await ToDo.findByIdAndDelete(req.params.id);
        res.json({success:true, data: todo});
    }
    catch(error){
        res.json({success:false, error:error});
    }
}

//Controller to update a specific document based on the input id
exports.updateTodoById = async(req,res) => {
    try{
        const todo = await ToDo.findByIdAndUpdate(req.params.id, req.body);
        res.json({success:true, data:todo});
    }
    catch(error){ 
        res.json({success:false, error:error});
    }
}