import './AddField.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/slice/todoSlice';
import { v4 } from 'uuid';

export const AddField = () => {
   const dispatch = useDispatch();
   const [value, setValue] = useState('');

   const addHandler = () => {
      const todo = {
         label: value,
         id: v4(),
         important: false
      }

      dispatch(addTodo(todo));
      setValue('');
   }
   return (
      <div className="todo__add-field add-field">
         <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            className="add-field__input"
            placeholder='Add todo...' />
         <button
            onClick={addHandler}
            className="add-field__btn">Add</button>
      </div>
   );
}
