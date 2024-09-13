import {useEffect, useState} from 'react'
import {createTodo, getAllTodo, updateTodoById, deleteTodoById} from '../actions/todoActions'
const {jspdf, default: jsPDF} = require("jspdf");

function Home(){
    //This is for the create todo function, which saves a new document to the database
    const [data, setData] = useState({id: '', title:'', description: ''})

    const [allTodos, setAllTodos] = useState([])
    useEffect = (() => {
        fetchTodo();
        console.log('todos', allTodos)
    })

    

    function handleChange(event){
        setData({...data, [event.target.name]: event.target.value})
    }

    //called when the submit button is hit. It stores a document with the input title and description using createTodo from actions.
    function handleSubmit(){
        console.log('title', data.title)
        console.log('description', data.description)
        const body = {title: data.title, description: data.description}
        createTodo(body).then((res)=>{console.log('response', res)}).catch((err)=>{console.error(err)})
        fetchTodo();
    }

    //calls the getAllTodo action from actions, then displays all todos in a given field.
    const fetchTodo = async () => {
        const res = await getAllTodo()
        setAllTodos(res.data)
        console.log(allTodos)
        }

    const generate = async () => {
        const doc = new jsPDF();
        var xcoord = 20
        var ycoord = 20
        const res = await getAllTodo()
        setAllTodos(res.data)
        doc.text("hihi", 10, 10)
        allTodos.map((elem, i) =>{
            var thisline = "Hi"
            doc.text("Hi", xcoord, ycoord)
            ycoord = ycoord + 10
    })
        doc.save("Trythis.pdf")
    }

    //When a fetched value is clicked, this function is called.
    //It stores the value of the currently selected field in the "data" variable. The "data" variable is then changed via update function below, changing the field itself.
    const handleValues = (elem) => {
        setData({
            title: elem.title,
            description: elem.description,
            id: elem._id
        })
    }



    //When the update button is clicked, this function is called.
    //It changes the body to whatever is entered in the title and description fields at the point of updating.
    const handleUpdate = async () => {
        const body = {
            title: data.title,
            description: data.description
        }
        const res = await updateTodoById(data.id, body)
        console.log("elements", res)
        fetchTodo();
    }

    const handleDelete = async (elem) => {
        const res = await deleteTodoById(elem._id)
        console.log("Response", res)
        fetchTodo();
    }
    

    //The actual visible frontend.
    return(
        <div>
            <label> Title: </label>
            <input type='text' name='title' value={data.title} placeholder="Enter title" onChange={handleChange}/> 
            
            <br/>
            
            <label> Description: </label>
            <input type='text' name='description' value={data.description} placeholder="Enter description" onChange={handleChange}/> 
            
            <br/>

            <button type="button" onClick={handleSubmit}> Hello!</button> <br/>
            <button className = "btn btn-primary" onClick={fetchTodo}> Fetch </button> <br/>
            <button onClick={handleUpdate}> Update </button> <br/>
            <button onClick={generate}> Generate PDF </button> <br/>
            <div>
                {allTodos.map((elem, i) =>(
                    <div key={i} onClick={() => handleValues(elem)}>
                        <h3>{elem.title}</h3>
                        <p>{elem.description}</p>
                        <button onClick = { () => handleDelete(elem)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home