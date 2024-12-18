import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../actionTypes";

const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: "",
  errorMessage: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload,
        isAuth: true,
        isError: false,
      };
    default:
      return state;
  }
};
