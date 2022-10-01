import './TodoItem.scss';
import { useDispatch } from 'react-redux';
import { completedTodo } from '../../store/slice/todoSlice';

export const TodoItem = (props) => {
   const dispatch = useDispatch();


   const toggleImportant = (id) => {
      dispatch(completedTodo(id));
   }

   return (
      <span onClick={() => toggleImportant(props.todo.id)}
         className={props.todo.impotent ? "item__text _active" : "item__text"}>
         {props.todo.label}
      </span>
   );
}

