import React from "react";
import { Todo } from "../constants";
import { toggleTodo } from "../api";

// type TodoItem = {
//   id?: number;
//   title: string;
//   status: boolean;
//   handleChange: () => void;
// };
interface TodoItem extends Todo {
  handleChange: () => void;
}

const TodoItem = ({ id, title, status, handleChange }: TodoItem) => {
  const handleToggle = (id?: number) => {
    toggleTodo(status, id).then((res) => {
      handleChange();
    });
  };
  return (
    <div>
      <h3>
        {title}-- {status ? "complete" : "pending"}
      </h3>
      <button onClick={() => handleToggle(id)}>Toggle</button>
    </div>
  );
};

export default TodoItem;
