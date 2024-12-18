import axios, { AxiosResponse } from "axios";
import { Todo } from "./constants";

export const addTodo = async (newTodo: Todo) => {
  let res: AxiosResponse<Todo> = await axios.post(
    "http://localhost:3000/posts",
    newTodo
  );
};

export const getTodos = async () => {
  let res: AxiosResponse<Todo[]> = await axios.get(
    "http://localhost:3000/posts"
  );
  return res.data;
};

export const toggleTodo = async (status: boolean, id?: number) => {
  let res = axios.patch(`http://localhost:3000/posts/${id}`, {
    status: !status,
  });
  return res;
};
