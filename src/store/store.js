import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice/todoSlice";
import searchSlice from "./slice/searchSlice";

export const store = configureStore({
   reducer: {
      todo: todoSlice,
      field:searchSlice
   }
})