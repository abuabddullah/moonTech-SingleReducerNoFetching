// import React from "react";
// import { BiListPlus } from "react-icons/bi";
// import { useDispatch } from "react-redux";
// import { productsActionTypes } from "../redux/actionTypes/actionTypes";

// const ProductCard = ({ product }) => {
//   // use redux
//   const dispatch = useDispatch();
//   return (
//     <div
//       className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
//       key={product._id}
//     >
//       <div className='h-52 w-52 mx-auto'>
//         <img src={product.image} alt={product.model} />
//       </div>
//       <h1 className='font-bold text-center'>{product.model}</h1>
//       <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
//       <div className=' flex-1'>
//         <ul className='space-y-2'>
//           {product.keyFeature.map((feature,index) => {
//             return <li key={index} className='text-sm '>{feature}</li>;
//           })}
//         </ul>
//       </div>
//       <div className='flex gap-2 mt-5'>
//         <button className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
//         onClick={() => dispatch({ type: productsActionTypes.ADD_TO_CART, payload: product })}
//         >
//           Add to cart
//         </button>
//         <button
//           title='Add to wishlist'
//           className='bg-indigo-500  py-1 px-2 rounded-full'
//         >
//           <BiListPlus className='text-white' />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from "react";
import { BiListPlus } from "react-icons/bi";
import { BsFillCloudMinusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../redux/actionCreators/productsActionCreators";

const ProductCard = ({ product }) => {
  // use redux
  const dispatch = useDispatch();

  // conditionally render depending on the page location
  const isCartPage = window.location.pathname === "/cart";

  return (
    <div
      className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900"
      key={product._id}
    >
      <small>{product?.cartQuantity}</small>
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product?.keyFeature.map((feature, index) => {
            return (
              <li key={index} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {isCartPage ? (
          <>
            <button
              className="bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
              onClick={() => dispatch(removeFromCart(product))}
            >
              Remove from cart
            </button>
            <button
              title="Add to wishlist"
              className="bg-red-500  py-1 px-2 rounded-full"
              onClick={() => dispatch(decreaseQuantity(product))}
            >
              <BsFillCloudMinusFill className="text-white" />
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to cart
            </button>
            <button
              title="Add to wishlist"
              className="bg-indigo-500  py-1 px-2 rounded-full"
            >
              <BiListPlus className="text-white" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
