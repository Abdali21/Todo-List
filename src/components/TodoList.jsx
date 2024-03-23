import { useSelector} from 'react-redux'
import TodoItem from './TodoItem';
const TodoList = () => {

  const allTodos = useSelector((state) =>{
    const{todos, searchTerm} = state;
    const normalizedTerm = searchTerm.toLowerCase();
    return todos.filter((todo) => todo.text.toLowerCase().includes(normalizedTerm))
  });
  console.log(allTodos);
  


//-----------------------------------------------AFFICHAGE----------------------------------------//
  return (
  
    <ul className='list-group list-group-flush list-group-item-action mt-4'>
        {allTodos.map((todo, index) =><TodoItem key={index} todo={todo} index={index} />
     )}
    </ul>
  )
}

export default TodoList