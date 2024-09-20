import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoInput: "",
  updateTodo: null,
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      state.todoInput = "";
      state.updateTodo = null;
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
      state.todoInput = "";
      state.updateTodo = null;
    },
    editTodo: (state, action) => {
      const id = action.payload;
      const todoEdit = state.todos.find((todo) => todo.id === id);
      if (todoEdit) {
        state.todoInput = todoEdit.text;
        state.updateTodo = todoEdit;
      }
    },
    handleChange: (state, action) => {
      state.todoInput = action.payload;
    },
    editSave: (state, action) => {
      const { id, text } = action.payload;

      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.text = text;
        }
        return todo;
      });
      state.todoInput = "";
      state.updateTodo = null;
    },
    cancelTodo: (state, action) => {
      state.updateTodo = "";
      state.todoInput = "";
    },
    duplicateTodo: (state, action) => {
      const { id } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        const newTodoId = nanoid();
        const todoToDuplicate = state.todos[index];
        state.todos.splice(index + 1, 0, {
          id: newTodoId,
          text: todoToDuplicate.text,
        });
      }
    },
  },
});
export const {
  addTodo,
  removeTodo,
  editTodo,
  handleChange,
  editSave,
  cancelTodo,
  duplicateTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
