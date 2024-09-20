import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../Features/todo/TodoSlice";

function fetchTodo() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todos);

  console.log("state", state);
  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchTodos())}>Click</button>
      <br />
      {state?.todos?.isLoading && (
        <>
          <b>Loading...</b>
        </>
      )}
      {state?.todos?.map((i) => {
        return <li>{i.title}</li>;
      })}
    </div>
  );
}

export default fetchTodo;
