import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slice/todoSlice';
import { v4 } from 'uuid';
import {useState} from "react";

export const useAddTodo = () => {
   const dispatch = useDispatch();
   const [value, setValue] = useState('');

   const addHandler = () => {
      const todo = {
         label: value,
         id: v4(),
         important: false,
         done: false
      }

      dispatch(addTodo(todo));
      setValue('');
   }
   return {
      addHandler,
      setValue,
      value
   }
}