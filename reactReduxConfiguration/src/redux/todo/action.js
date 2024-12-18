import {
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  TODO_FAILURE,
  TODO_REQUEST,
} from "../actionType";

export const todoRequestAction = () => {
  return { type: TODO_REQUEST };
};

export const todoSuccessAction = (payload) => {
  return { type: GET_TODO_SUCCESS, payload: payload };
};

export const todoFailureAction = () => {
  return { type: TODO_FAILURE };
};

export const todoPostRequestAction = () => {
  return { type: TODO_REQUEST };
};

export const todoPostSuccessAction = (payload) => {
  return { type: POST_TODO_SUCCESS, payload };
};

export const todoPostFailureAction = () => {
  return { type: TODO_FAILURE };
};

// delete
//---delete id;
//---todo ---store
//use filter method
