import React from "react";
import { Listitem } from "./Listitem";
export function TodoList(props) {
  const listOfTodos=
    props.toDoListArray.map((task) => {
      return <Listitem task={task} />;
    });
  
    
  return (
    <ol>
      {listOfTodos}
    </ol>
  );
}
