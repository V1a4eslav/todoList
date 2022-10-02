import './TodoItem.scss';
import { useDispatch } from 'react-redux';
import { doneTodo } from '../../store/slice/todoSlice';
// import { useState } from 'react';


export const TodoItem = (props) => {
   const dispatch = useDispatch();

   const toggleImportant = (id) => {
      dispatch(doneTodo(id));
   }

   return (
      <span onClick={() => toggleImportant(props.todo.id)}
         className={
            [props.todo.done ? "item__text _done" : "item__text",
            props.todo.important ? "_important" : ''].join(' ')
         }>
         {props.todo.label}
      </span >
   );
}

