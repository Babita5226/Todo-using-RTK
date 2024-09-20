import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../Features/todo/TodoSlice";
export const Store = configureStore({
  reducer: TodoReducer,
});
