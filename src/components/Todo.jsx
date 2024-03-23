import { BsPlusSquareFill, BsSearch } from "react-icons/bs";
import './Todo.css'
import { useDispatch} from 'react-redux'
import { useState } from "react";
import { addTodo, searchTodo } from "../redux/actions/actionsTodo";
import TodoList from "./TodoList";
const Todo = () => {
    const[newTodo,setNewTodo] = useState('');
    const[newSearch, setNewSearch] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () =>{
        dispatch(addTodo(newTodo))
        setNewTodo('')
    }

    const handleSearchTodo = (value) => {
      setNewSearch(value);
      dispatch(searchTodo(value));
    }


//----------------------------------------------------AFFICHAGE------------------------------------------------------//
  return (
    <div className="mx-auto w-75 bg-light mt-5 p-4" style={{minHeight:'60vh'}}>
        <h2 className="text-center fw-bold ">PERSONAL TODO APP</h2>
        <hr />
        <div className="d-flex align-items-center">
            <div className="d-flex justify-content-center align-items-center w-75 mx-auto">
                <input type="text" placeholder="Add Todo" className="form-control" 
                 onChange={(e) => setNewTodo(e.target.value)}
                 value={newTodo}
                />
                <BsPlusSquareFill  className="addTodo" onClick={handleAddTodo}/>
            </div>

            <div className="d-flex justify-content-center align-items-center w-25 ms-5">
                <input type="text" placeholder="Search Todo" className="form-control" 
                onChange={(e)=>handleSearchTodo(e.target.value)}
                value={newSearch}
                />
              <BsSearch className="addTodo" />
            </div>
        </div>
        <TodoList/>
    </div>
  )
}

export default Todo