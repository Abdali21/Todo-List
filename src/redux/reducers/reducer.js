import { ADDTODO, DELETETODO, DONETODO, EDITTODO, SEARCHTODO } from "../actions/actionsType"

const  initialState = {
    todos:[],
    searchTerm:''
}

const reducerTodo = (state = initialState, action) =>{
    switch(action.type){
        case ADDTODO:
            return{
                todos:[...state.todos, {text:action.payload.text, completed: false}],
                searchTerm:state.searchTerm
            }
        case SEARCHTODO:
            return{
                todos:state.todos,
                searchTerm:action.payload.value
            }
        case DELETETODO:
            return{
                todos:state.todos.filter((todo, index) => index !== action.payload.id),
                searchTerm:state.searchTerm
            }
        case EDITTODO:
            return{
                todos:state.todos.map((todo, index) => index === action.payload.id ? {...todo, ...action.payload.textValue} : todo),
                searchTerm:state.searchTerm
            }
        case DONETODO:
            return{
                todos:state.todos.map((todo, index) => index=== action.payload.id ? {...todo, completed:true} : todo),
                searchTerm:state.searchTerm
            }
    default:
        return state
    }
}

export default reducerTodo;