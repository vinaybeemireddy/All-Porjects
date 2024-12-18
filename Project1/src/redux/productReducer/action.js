import axios from "axios";
import {
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "../../actionTypes";

// const print=a=>b=>c=>return a+b+c

export const addProduct = (newProduct) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post("http://localhost:3000/products", newProduct)
    .then((request) => {
      console.log(request.data);
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({ type: PRODUCT_FAILURE });
    });
};
