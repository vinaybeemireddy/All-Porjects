import React, { useState } from "react";
import { addTodo } from "../api";
import { Todo } from "../constants";

const TodoInput = () => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: Todo = {
      title,
      status: false,
    };
    addTodo(newTodo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Todo" onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoInput;
