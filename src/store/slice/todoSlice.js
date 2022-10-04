import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   todos: [
      { label: 'Drink coffee', id: 1, important: false, done: false },
      { label: 'Listen teacher', id: 2, important: true, done: false },
      { label: 'Sleep after afternoon', id: 3, important: false, done: false }
   ],
}


export const todoSlice = createSlice({
   name: 'todo',
   initialState,
   reducers: {
      addTodo: (state, action) => {
         state.todos.push(action.payload);
      },
      removeTodo: (state, action) => {
         state.todos = state.todos.filter(todo => todo.id !== action.payload)
      },
      doneTodo: (state, action) => {
         const doneTodo = state.todos.find(todo => todo.id === action.payload);
         doneTodo.done = !doneTodo.done;
      },
      importantTodo: (state, action) => {
         const important = state.todos.find(todo => todo.id === action.payload);
         important.important = !important.important;
      },
   }
})


export const { addTodo, removeTodo, doneTodo, importantTodo } = todoSlice.actions;
export default todoSlice.reducer;