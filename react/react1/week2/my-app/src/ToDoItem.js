import React, { useState } from "react";
import "./todoitems.css";

function TodoItem({ description, deleteTodo, id }) {
  const [checked, setChecked] = useState(false);
  const isChecked = (itemChecked) => {
    if (itemChecked === true) {
      return "checked-item";
    } else {
      return "unchecked-item";
    }
  };

  return (
    <div>
      <li className={isChecked(checked)}>{description}</li>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      ></input>
      <button onClick={deleteTodo(id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
