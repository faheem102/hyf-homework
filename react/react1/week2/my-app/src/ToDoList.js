import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TodoItem from "./ToDoItem";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
  {
    id: 4,
    description: "Go to work",
  },

  {
    id: 5,
    description: "Practice coding",
  },
];

export function TodoList() {
  const [todosState, setTodosState] = useState(todos);

  const addTodo = () => {
    let newId = 0;
    let newTodo = "";
    if (!todosState.length) {
      console.log("any string");
      newTodo = { description: "random tasks", id: 11 };
    } else {
      newId = todosState[todosState.length - 1].id + 1;
      const randomTodo =
        todosState[Math.floor(Math.random() * todosState.length)];
      newTodo = { description: randomTodo.description, id: newId };
    }

    setTodosState((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const deleteTodo = (id) => (e) => {
    setTodosState((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const todoItems = todosState.map((todo) => (
    <TodoItem
      description={todo.description}
      key={todo.id}
      id={todo.id}
      deleteTodo={deleteTodo}
    ></TodoItem>
  ));

  return (
    <>
      <div className="App">
        <button onClick={addTodo}>Add todo</button>
      </div>

      {todoItems.length === 0 ? "No items in the list" : todoItems}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoList />, rootElement);
