import React, { memo, useMemo } from "react";

const heavyTask = (delay) => {
  let start = Date.now();
  while (Date.now - start < delay) {
    continue;
  }
  return true;
};

const TodoItem = memo(({ id, title, status, handleToggle, handleDelete }) => {
  useMemo(() => {
    heavyTask(100);
  }, []);

  return (
    <div>
      <h3>{title}</h3>
      <h3>{status ? "completed" : "pending"}</h3>
      <button onClick={() => handleToggle(id)}>toggle</button>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  );
});

export default TodoItem;
