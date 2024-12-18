import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  todoFailureAction,
  todoRequestAction,
  todoSuccessAction,
} from "../redux/todo/action";

const TodoList = () => {
  const todo = useSelector((store) => store.todoReducer.todo);
  const loading = useSelector((store) => store.todoReducer.isLoading);
  const error = useSelector((store) => store.todoReducer.isError);

  const dispatch = useDispatch();
  const getTodo = () => {
    dispatch(todoRequestAction());
    axios
      .get("http://localhost:3000/todos")
      .then((res) => {
        console.log(res.data);
        dispatch(todoSuccessAction(res.data));
      })
      .catch((error) => {
        console.log("error:", error.message);
        dispatch(todoFailureAction());
      });
  };

  useEffect(() => {
    getTodo();
  }, []);

  console.log("re-rendering todo");
  return (
    <div>
      <h1>Todos</h1>
      {loading && <h1>...LOADING</h1>}
      {error && <h1>error...</h1>}
      <TodoInput />
      {todo.map((element) => {
        return (
          <div key={element.id}>
            {element.title}---{element.author}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
