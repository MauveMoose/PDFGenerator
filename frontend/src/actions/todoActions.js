import { ENDPOINT_URL } from "../constants/constants"

//This does the same thing as sending a file via Postman. The fetch link is essentially the same as the link entered to send a request (ENDPOINT_URL is a constant in "constants")

export const createTodo = (todo) => {
    return fetch(`${ENDPOINT_URL}/createTodo`, {
        method: 'POST',
        headers: {Accept: 'application/json', 'Content-type': 'application/json'},
        body: JSON.stringify(todo)
    }).then((res)=>{
        return res.json()
    }).catch((err)=>{
        console.log(err)
    })
}

export const getAllTodo = () => {
    return fetch(`${ENDPOINT_URL}/get-all-todos`, {
        method: 'GET',
        headers: {Accept: 'application/json', 'Content-type': 'application/json'},
    }).then((res)=>{
        return res.json()
    }).catch((err)=>{
        console.log(err)
    })
}

export const updateTodoById = (id, body) => {
    return fetch(`${ENDPOINT_URL}/update-todo-by-id/${id}`, {
        method: 'PATCH',
        headers: {Accept: 'application/json', 'Content-type': 'application/json'},
        body: JSON.stringify(body)
    }).then((res)=>{
        return res.json()
    }).catch((err)=>{
        console.log(err)
    })
}

export const deleteTodoById = (id) => {
    return fetch(`${ENDPOINT_URL}/delete-todo/${id}`, {
        method: 'DELETE',
        headers: {Accept: 'application/json', 'Content-type': 'application/json'},
    }).then((res)=>{
        return res.json()
    }).catch((err)=>{
        console.log(err)
    })
}