import axios from "axios";
import {
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
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

export const getProducts = (paramObj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  // console.log(paramObj);
  axios
    .get("http://localhost:3000/products", paramObj)
    .then((response) => {
      console.log(response.data);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const deleteProduct = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  let payload = [];
  axios.get("http://localhost:3000/products").then((res) => {
    payload = res.data.filter((el) => el.id !== id);
  });

  return axios
    .delete(`http://localhost:3000/products/${id}`)
    .then((response) => {
      console.log(response.data);
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const editProduct = (id, data) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .patch(`http://localhost:3000/products/${id}`, data)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: EDIT_PRODUCT_SUCCESS });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({ type: PRODUCT_FAILURE });
    });
};
