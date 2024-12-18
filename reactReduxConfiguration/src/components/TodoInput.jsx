import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  todoPostFailureAction,
  todoPostRequestAction,
  todoPostSuccessAction,
} from "../redux/todo/action";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const postTodo = () => {
    dispatch(todoPostRequestAction()); //for loading
    const newTodo = {
      title: title,
    };
    axios
      .post("http://localhost:3000/todos", newTodo)
      .then((res) => {
        dispatch(todoPostSuccessAction(res.data));
      })
      .catch((error) => {
        dispatch(todoPostFailureAction());
        console.log(error);
      });
  };

  const addTodo = () => {
    postTodo();
    setTitle("");
  };
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>submit</button>
    </div>
  );
};

export default TodoInput;
