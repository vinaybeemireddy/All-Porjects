import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import { customFetch } from "../utils/index.jsx";

const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featureProducts"],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);

  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
