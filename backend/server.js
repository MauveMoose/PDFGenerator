//Imports Express
const express = require('express');

//Makes sure it used the environment parameters defined in .env in this case port=4000
require("dotenv").config();

//Imports Mongoose
const mongoose = require("mongoose");

//Imports body parser
const bodyParser = require("body-parser");

//Imports cors
const cors = require("cors");

//Imports the router created in "routes"
const todoRouter = require('./routes/todoRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors())

//Connects to a created MongoDB server. If no server with the given name exists, it will be created.
mongoose.connect("mongodb://localhost:27017/todo")
.then(()=>{console.log("Connected")})
.catch(()=>{console.log("Error")});

app.use('/api', todoRouter)

app.listen(process.env.PORT, ()=>{console.log(`Server started at ${process.env.PORT}`)});