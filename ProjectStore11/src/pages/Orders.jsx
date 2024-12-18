import React from "react";
import { redirect, useLoaderData } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import PaginationContainer from "../components/PaginationContainer";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

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
        header: {
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
  const { meta } = useLoaderData();

  if (meta.pagination.total < 1) {
    return <SectionTitle text="please make an order" />;
  }
  return (
    <>
      <SectionTitle text="Your Orders" />

      {/* <PaginationContainer /> */}
    </>
  );
};

export default Orders;
