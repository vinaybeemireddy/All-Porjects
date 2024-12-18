import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, companies, order, price, category, shipping } = params;
  console.log(meta);
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* CATEGORY  */}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* COMPANIES  */}
      <FormSelect
        label="select company"
        name="companies"
        list={meta.companies}
        size="select-sm"
        defaultValue={companies}
      />
      {/* ORDER  */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      {/* Price  */}
      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        defaultValue={price}
      />

      {/* SHIPPING  */}
      <FormCheckbox
        label="free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/* BUTTONS   */}
      <button type="submit" className="btn btn-secondary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
