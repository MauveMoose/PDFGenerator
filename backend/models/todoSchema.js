//The schema determines the format of data in the database

//Imports "mongoose", a package that interfaces with MongoDB
const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
    //Each line represents a field (document); 'required; means that field is required, 'unique' means that field cannot have repeated values and 'trim' removes spaces 
    title:{required: true, type: String, trim:true},
    description:{type: String, required: false}
});

//exports this schema
module.exports = mongoose.model("ToDo", todoSchema)