import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   todos: [
      { label: 'Drink coffee', id: 1, important: false },
      { label: 'Listen teacher', id: 2, important: true },
      { label: 'Sleep after afternoon', id: 3, important: false }
   ]
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
      completedTodo: (state, action) => {
         const completedTodo = state.todos.find(todo => todo.id === action.payload);
         completedTodo.important = !completedTodo.important;
      }
   }
})


export const { addTodo, removeTodo, completedTodo } = todoSlice.actions;
export default todoSlice.reducer;