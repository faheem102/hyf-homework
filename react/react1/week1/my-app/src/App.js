import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./TodoList";

const toDoListArray = [
  "Get out of bed, Wed Sep 13 2017",
  "Brush teeth, Thu Sep 14 2017",
  "Eat breakfast, Fri Sep 15 2017",
];

function toDolistApp(props) {
  return (
    <div className="to-do-list">
      <h2>TodoList</h2>
      <TodoList toDoListArray={toDoListArray}></TodoList>
    </div>
  );
}

export default toDolistApp;
