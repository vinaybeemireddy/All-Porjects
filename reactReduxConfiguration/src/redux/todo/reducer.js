import {
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  TODO_FAILURE,
  TODO_REQUEST,
} from "../actionType";
const initialState = {
  todo: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TODO_REQUEST:
      return { ...state, isLoading: true };
    case GET_TODO_SUCCESS:
      return { ...state, todo: payload, isLoading: false };
    case TODO_FAILURE:
      return { ...state, isError: true, isLoading: false };
    case POST_TODO_SUCCESS:
      return { ...state, isLoading: false, todo: [...state.todo, payload] };
    default:
      return state;
  }
};
