import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { reducer } from "./fetchRestaurantReducer";
import RestaurantCard from "./RestaurantCard";
import { getRestaurants } from "../api/api";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const Restaurant = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const[page, setPage]=useState(1)



  useEffect(() => {
    dispatch({ type: "FETCH_LOADING" });
    getRestaurants({page:page, perPage:4})
      .then((response) => {
        console.log("res", response?.data?.data);
        dispatch({ type: "FETCH_SUCCESS", payload: response?.data?.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "FETCH_ERROR" });
      });
  }, [page]);

  const { loading, error, data } = state;
  return loading ? (
    <h1>loading....</h1>
  ) : error ? (
    <h1>something went wrong....</h1>
  ) : (
    <>
    {/* <AddRestaurant/> */}
    {data.map((restaurant)=>{
       return <RestaurantCard key={restaurant.id} {...restaurant}/>
    })}
    <div>
        <button disabled={page===1} onClick={()=>setPage(page-1)}>prev</button>
        <button disabled>{page}</button>
         <button onClick={()=>setPage(page+1)}>next</button>
    </div>
    </>
  );
};

export default Restaurant;
