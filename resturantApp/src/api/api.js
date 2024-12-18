import axios from "axios";


export const getRestaurants = (params) => {
    return axios.get(import.meta.env.VITE_RESTAURANT_URL,{
        params:{
            _per_page:4,
            _page:params.page
        }
    });
  };