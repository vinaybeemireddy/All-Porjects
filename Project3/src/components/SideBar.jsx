import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialGender = searchParams.getAll("gender") || [];
  const [gender, setGender] = useState(initialGender || []);

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

  useEffect(() => {
    let params = {
      // gender:gender
      gender,
    };
    setSearchParams(params);
  }, [gender]);

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
        <input type="checkbox" />
        <label htmlFor="">t-shirt</label>
      </div>
      <div>
        <input type="checkbox" />
        <label htmlFor="">jeans</label>
      </div>
      <div>
        <input type="checkbox" />
        <label htmlFor="">shoes</label>
      </div>

      <h3>Sort by Price</h3>

      <div>
        <input type="radio" name="order" />
        <label htmlFor="">Ascending</label>
        <input type="radio" name="order" />
        <label htmlFor="">Descending</label>
      </div>
    </div>
  );
};

export default SideBar;
