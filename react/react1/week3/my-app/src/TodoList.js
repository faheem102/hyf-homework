import { useEffect, useState } from "react";
import "./todo.css";

function FancyBorder(props) {
  return <div className="fancy-border">{props.children}</div>;
}
function FormBorder(props) {
  return <div className="form-border">{props.children}</div>;
}
export function TodoList({ fetchUrl }) {
  const [list, setList] = useState([]);
  const [inputEditDescription, setInputEditDescription] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // fetchUrl response as json and change the list state to newState called setList

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then(setList);
  }, []);

  // toggleClass function will map all the list items to verify if the checkbox is checked or not
  const toggleClass = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          isChecked: !item.isChecked,
        };

        return updatedItem;
      }

      return item;
    });

    setList(newList);
  };
  //editItem function will map all the list items to check a specific list item is prompted for editing.
  const editItem = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          isEditing: !item.isEditing,
        };
        //if editing is true than the corresponding state will set itself to the edited description
        setInputEditDescription(item.description);
        return updatedItem;
      }

      return item;
    });

    setList(newList);
  };
  // updateItem will map the list items to verify if editing is true than it will update the specific item
  const updateItem = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          description: inputEditDescription,
          isEditing: !item.isEditing,
        };

        return updatedItem;
      }

      return item;
    });

    setList(newList);
  };
  // deleteTodo function will filter the items and delete only the specific item
  const deleteTodo = (id) => {
    setList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const todoItems = list.map((todo) => (
    <FancyBorder key={todo.id}>
      <span
        className={
          todo.isEditing ? "notEditing" : todo.isChecked ? "checked-item" : ""
        }
      >
        {todo.description} --
        {todo.deadline}
      </span>
      <input
        type="text"
        id="todoitem"
        placeholder="Todo Item"
        className={todo.isEditing ? "editing" : "notEditing"}
        value={inputEditDescription}
        onChange={(e) => setInputEditDescription(e.target.value)}
      ></input>
      {deleteTodo}
      <input type="checkbox" onChange={(e) => toggleClass(todo.id)}></input>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button
        onClick={() => editItem(todo.id)}
        className={todo.isEditing ? "notEditing" : "editing"}
      >
        Edit
      </button>
      <button
        onClick={() => updateItem(todo.id)}
        className={todo.isEditing ? "editing" : "notEditing"}
      >
        Update
      </button>
    </FancyBorder>
  ));

  const FormPart = ({ list }, { setList }) => {
    const [inputDescription, setInputDescription] = useState("");
    const [inputDeadline, setInputDeadline] = useState("");
    // addTodo will give new todos an id. it will take value in description and deadline input and then add it into the list of todos

    const addTodo = () => {
      const lastItem = list[list.length - 1];
      const newId = lastItem ? lastItem.id + 1 : 1;
      const newTodo = {
        description: inputDescription,
        id: newId,
        deadline: inputDeadline,
        isChecked: false,
        isEditing: false,
      };

      setList((prevTodos) => {
        return [...prevTodos, newTodo];
      });
    };
    return (
      <div>
        <form>
          <label>Todo Description</label>
          <input
            type="text"
            id="todoitem"
            placeholder="Todo Item"
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
          ></input>
          <label>Deadline</label>
          <input
            type="date"
            id="deadline"
            value={inputDeadline}
            onChange={(e) => setInputDeadline(e.target.value)}
          ></input>
        </form>
        <button onClick={addTodo}>Add todo</button>
      </div>
    );
  };

  return (
    <>
      <FormBorder>
        <FormPart list={list} setList={setList} />
      </FormBorder>
      {todoItems.length === 0 ? "No items in the list" : todoItems}
    </>
  );
}
