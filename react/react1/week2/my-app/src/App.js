import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./ToDoList";
import { WatchCounter } from "./Counter";

function App() {
  return (
    <div className="App">
      <h2>TodoList</h2>
      <WatchCounter></WatchCounter>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
