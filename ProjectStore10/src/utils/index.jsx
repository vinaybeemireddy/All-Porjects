import axios from "axios";

const BaseURL = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: BaseURL,
});

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};

export const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 6, url: "orders", text: "orders" },
];
