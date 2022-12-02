import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const state = useSelector((state) => state);
  const { cart } = state || [];
  console.log(cart);
  return (
    <>
      <h1 className="text-3xl font-semibold text-center">
        This is cart page | total cart products : {cart?.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {cart
          ?.sort((a, b) => a._id - b._id)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </>
  );
};

export default Cart;
