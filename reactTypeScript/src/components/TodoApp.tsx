import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import { getTodos } from "../api";
import { Todo } from "../constants";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [change, setChange] = useState<boolean>(false);

  useEffect(() => {
    getTodos().then((res: Todo[]) => {
      setTodo(res);
    });
  }, [change]);

  const handleChange = () => {
    setChange((prev) => !prev);
  };

  return (
    <div>
      <h2>TodoApp</h2>
      <TodoInput />
      {todo.map((element: Todo) => {
        return (
          <TodoItem key={element.id} {...element} handleChange={handleChange} />
        );
      })}
    </div>
  );
};

export default TodoApp;
