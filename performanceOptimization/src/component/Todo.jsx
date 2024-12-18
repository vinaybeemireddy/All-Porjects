import React, { useCallback, useState } from "react";
import TodoItem from "./TodoItem";

const initialState = [
  { id: 1, title: "task-1", status: false },
  { id: 2, title: "task-2", status: false },
  { id: 3, title: "task-3", status: false },
];
const Todo = () => {
  const [todo, setTodo] = useState(initialState);
  const [title, setTitle] = useState("");

  const handleAddTodo = () => {
    let newTodo = {
      id: Date.now() + title, // math.random  //uuid
      title: title,
      status: false,
    };
    setTodo([...todo, newTodo]);
    setTitle("");
  };

  //   useCallback(()=>{},[])
  const handleToggle = useCallback((id) => {
    setTodo((prev) => {
      return prev.map((el) => {
        return el.id === id ? { ...el, status: !el.status } : el;
      });
    });
  }, []);

  const handleDelete = useCallback((id) => {
    setTodo((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  }, []);
  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddTodo}>add todo</button>
      {todo &&
        todo.map((e) => {
          return (
            <TodoItem
              key={e.id}
              {...e}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          );
        })}
    </div>
  );
};

export default Todo;

/*
            id      title      status   handleToggle (useCallback)
prev:        1      task-1      false       aa
current:     1      task-1      false       aa */
