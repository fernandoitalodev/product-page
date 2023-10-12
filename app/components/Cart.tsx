"use client";
import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemsCart from "./ItemsCart";

const Cart = () => {
  const { showCart, setShowCart, cartItems, setCartItems } =
    useContext(CartContext);

  return (
    <div
      className={`${
        showCart ? "flex flex-col" : "hidden"
      } absolute w-11/12 m-4 bg-white z-30 lg:w-3/12 lg:top-10 lg:right-7 border rounded-lg h-[200px] lg:h-[300px]  top-16 right-0  `}
    >
      <h3 className="font-semibold p-2">Cart</h3>
      <hr />
      <div className={"flex items-center justify-start h-full flex-col overflow-y-auto over overscroll-auto overflow-x-hidden "}>
        {cartItems.length > 0 && (
          <>
            {cartItems.map((el, i: number) => {
              return (
                <div key={i} className="">
                  <ItemsCart
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    quant={el.quant}
                    idItem={el.idItem}
                  />
                </div>
              );
            })}
          </>
        )}
        {cartItems.length < 1 && (
          <p className="font-semibold m-auto">Your cart is empty.</p>
        )}
        {cartItems.length >=1 &&(
          <div className="btn-orange">
            checkout
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
