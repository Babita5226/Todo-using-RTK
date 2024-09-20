import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  handleChange,
  editSave,
  cancelTodo,
} from "../Features/todo/TodoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.todoInput);
  const updateTodo = useSelector((state) => state.updateTodo);
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      return;
    } else if (updateTodo !== null) {
      dispatch(editSave({ id: updateTodo.id, text: input }));
    } else {
      dispatch(addTodo(input));
    }
  };

  return (
    <div>
      <form action="" onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => dispatch(handleChange(e.target.value))}
        />

        <button
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          type="submit"
        >
          {updateTodo ? "Update" : "Add Todo"}
        </button>
        {updateTodo && (
          <button
            type="submit"
            className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg"
            onClick={() => dispatch(cancelTodo())}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default AddTodo;
