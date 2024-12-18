import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editProduct } from "../redux/productReducer/action";

const EditPage = () => {
  const [price, setPrice] = useState("");
  let { id } = useParams();

  const products = useSelector((store) => store.productReducer.products);
  const dispatch = useDispatch();
  // console.log(products);
  useEffect(() => {
    const data = products.find((el) => el.id === +id);
    setPrice(data.price);
  }, []);

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  const handleEdit = () => {
    const data = { price };
    dispatch(editProduct(id, data));
  };
  return (
    <div>
      <h1>{id}</h1>
      <input type="number" value={price} onChange={handleChange} />
      <button onClick={handleEdit}>update</button>
    </div>
  );
};

export default EditPage;
