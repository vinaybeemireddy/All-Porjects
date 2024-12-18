import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialGender = searchParams.getAll("gender");
  const initialCategory = searchParams.getAll("category");
  const initialOrder = searchParams.get("order");
  const [gender, setGender] = useState(initialGender || []);
  const [category, setCategory] = useState(initialCategory || []);
  const [order, setOrder] = useState(initialOrder || "");

  const handleCategory = (e) => {
    const { value } = e.target;
    // console.log(value);
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((element) => element !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handleGender = (e) => {
    // console.log(e.target.value);
    const { value } = e.target; //male
    let newGender = [...gender];

    if (newGender.includes(value)) {
      newGender = newGender.filter((element) => element !== value);
    } else {
      newGender.push(value);
    }
    setGender(newGender);
  };

  const handleSort = (e) => {
    const { value } = e.target;
    console.log(value);
    setOrder(value);
  };
  console.log(category);
  useEffect(() => {
    let params = {
      gender,
      category,
    };

    order && (params.order = order);
    setSearchParams(params);
  }, [gender, category, order]);

  return (
    <div>
      <h3>Filter by Gender</h3>
      <div>
        <input
          type="checkbox"
          value={"male"}
          onChange={handleGender}
          checked={gender.includes("male")}
        />
        <label htmlFor="">MEN</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"female"}
          onChange={handleGender}
          checked={gender.includes("female")}
        />
        <label htmlFor="">Women</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"kid"}
          onChange={handleGender}
          checked={gender.includes("kid")}
        />
        <label htmlFor="">Kid</label>
      </div>

      <h3>Filter by Category</h3>
      <div>
        <input
          type="checkbox"
          value={"t-shirt"}
          onChange={handleCategory}
          checked={category.includes("t-shirt")}
        />
        <label htmlFor="">t-shirt</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"jeans"}
          onChange={handleCategory}
          checked={category.includes("jeans")}
        />
        <label htmlFor="">jeans</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"shoes"}
          onChange={handleCategory}
          checked={category.includes("shoes")}
        />
        <label htmlFor="">shoes</label>
      </div>

      <h3>Sort by Price</h3>

      <div onChange={handleSort}>
        <input
          type="radio"
          name="order"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label htmlFor="">Ascending</label>
        <input
          type="radio"
          name="order"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label htmlFor="">Descending</label>
      </div>
    </div>
  );
};

export default SideBar;
