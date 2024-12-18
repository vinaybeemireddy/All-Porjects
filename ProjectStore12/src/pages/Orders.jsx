import React from "react";
import { redirect, useLoaderData } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import PaginationContainer from "../components/PaginationContainer";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import OrderList from "../components/OrderList";

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("You must be logged in to checkout");
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    console.log(params);
    try {
      const response = await customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error in placing an order";
      if (error?.response?.status === 401 || 403) return redirect("/login");
      toast.error(errorMessage);
      return null;
    }
  };

const Orders = () => {
  const { ordes, meta } = useLoaderData();

  if (meta.pagination.total < 1) {
    return <SectionTitle text="please make an order" />;
  }
  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrderList />
      <PaginationContainer />
    </>
  );
};

export default Orders;
