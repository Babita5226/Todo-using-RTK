import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  duplicateTodo,
  editTodo,
  removeTodo,
} from "../Features/todo/TodoSlice";
const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const deletedTodos = useSelector((state) => state.deletedTodos);
  const handleEdit = (todo) => {
    dispatch(editTodo(todo.id));
  };
  const handleDuplicate = (id) => {
    dispatch(duplicateTodo({ id }));
  };
  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      <div className="text-xl font-bold">Todos</div>
      <ul className="list-none mr-96">
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            <div className="text-white">{index + 1}</div>
            <div className="text-white">{todo.text}</div>
            <button
              className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
              onClick={() => handleEdit(todo)}
            >
              Edit
            </button>
            <button
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
            <button
              className="text-white bg-gray-500 border-0 py-1 px-4 focus:outline-none hover:bg-gray-600 rounded text-md"
              onClick={() => handleDuplicate(todo.id)}
            >
              Duplicate
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <div className="text-xl font-bold">Deleted Todos</div>
        <ul className="list-none">
          {deletedTodos.map((todo, index) => (
            <li
              key={todo.id}
              className="mt-4 flex justify-between items-center bg-red-800 px-4 py-2 rounded"
            >
              <div className="text-white">{index + 1}</div>
              <div className="text-white">{todo.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
