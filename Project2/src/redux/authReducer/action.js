import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../actionTypes";

export const login = (useData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post("https://reqres.in/api/login", useData)
    .then((response) => {
      console.log(response);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    });
};
