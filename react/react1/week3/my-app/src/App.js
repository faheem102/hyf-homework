import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./TodoList";
import { WatchCounter } from "./Counter";

function App() {
  return (
    <div className="App">
      <h2>Todo List</h2>
      <WatchCounter></WatchCounter>
      <TodoList fetchUrl="https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"></TodoList>
    </div>
  );
}

export default App;
