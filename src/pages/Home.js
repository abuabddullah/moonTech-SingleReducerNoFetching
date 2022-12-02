import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <h1 className="text-3xl font-semibold text-center">
        This is home page | total products : {products?.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {products?.map((product,index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
