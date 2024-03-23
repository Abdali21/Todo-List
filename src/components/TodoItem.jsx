/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { deleteTodo, doneTodo, editTodo } from '../redux/actions/actionsTodo';
const TodoItem = ({todo, index}) => {

  const dispatch = useDispatch()
 


//----------------------------------------------AFFICHAGE------------------------------------------------//
  return (
    <li className="list-group-item list-group-item-dark mt-2 d-flex align-items-center justify-content-between">
        <div className={`${todo.completed ? 'text-decoration-line-through' : ''}`}>
        <span className='me-2'>{index + 1}.</span>{todo.text}
        </div>
        <div>
            <button className='btn btn-success btn-sm float-end ms-2'
            onClick={() => dispatch(editTodo(index, {...todo, text:prompt('enter new value')}))}
            >Edit</button>
            <button className='btn btn-warning btn-sm float-end ms-2'
             onClick ={() => dispatch(doneTodo(index))}
            >Done</button>
            <button className='btn btn-danger btn-sm float-end'
            onClick={() => dispatch(deleteTodo(index))}
            >Delete</button>
        </div>
    </li>
  )
}
//------------------------------------------------------------------------------------------------------//
TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default TodoItem