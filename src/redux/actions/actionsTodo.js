import { ADDTODO, DELETETODO, DONETODO, EDITTODO, SEARCHTODO } from "./actionsType";

export const  addTodo = (text) => ({
    type:ADDTODO,
    payload:{text}
})
export const searchTodo = (value) =>({
    type:SEARCHTODO,
    payload:{value}
})   
export const deleteTodo = (id) =>({
    type:DELETETODO,
    payload:{id}
})

export const editTodo = (id,textValue) => ({
    type:EDITTODO,
    payload:{id,textValue}
})

export const doneTodo = (id) =>({
    type:DONETODO,
    payload:{id}
})