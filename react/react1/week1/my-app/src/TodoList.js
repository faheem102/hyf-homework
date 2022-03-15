import React from "react";
import {Listitems} from "./Listitems";
export function TodoList(props){
    return (
        <ol>
            {props.toDoListArray.map((task) => {
          return <Listitems task= {task} />;
        })}
        </ol>
    )
}