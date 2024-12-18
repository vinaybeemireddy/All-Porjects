import axios from "axios";
import {
  GET_PRODUCT_SUCCESS,
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

export const getProducts = (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get("http://localhost:3000/products")
    .then((response) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({ type: PRODUCT_FAILURE });
    });
};
