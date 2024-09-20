import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold  ml-96  mt-10">Redux Toolkit</h1>
      <div className="ml-96">
        <AddTodo />
        <Todo />
      </div>
    </div>
  );
}

export default App;
