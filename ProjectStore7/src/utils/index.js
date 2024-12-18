import axios from "axios";

const BaseURL = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: BaseURL,
});
