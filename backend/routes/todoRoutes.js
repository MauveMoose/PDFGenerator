//Imports Express
const express = require("express");

//Imports the controller scripts from "controllers". Notice how they have the same names as the functions in todoController i.e. createTodo, getAllTodo etc.
const {createTodo, getAllTodo, getTodoById, deleteTodoById, updateTodoById} = require('../controllers/todoController');

//creates a new router object.
const router = express.Router();

router.post('/createTodo', createTodo);
router.patch('/update-todo-by-id/:id', updateTodoById);
router.get("/get-all-todos", getAllTodo);
router.get("/get-todo-by-id/:id", getTodoById);
router.delete("/delete-todo/:id", deleteTodoById);


//exports this router, as well as the functions it contains as defined above
module.exports = router;