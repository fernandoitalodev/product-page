"use client";
import Image from "next/image";
import NavBar from "./NavBar";
import { useContext, useState } from "react";
import Cart from "./Cart";
import { CartContext } from "./context/CartContext";

const Header = () => {
  const { showCart, setShowCart,cartItems } = useContext(CartContext);
  return (
    <header className="flex justify-between p-5 bg-white relative lg:w-10/12 lg:m-auto">
      <Cart />

      <div className="flex-container-row lg:flex-row-reverse">
        <span className="">
          <NavBar />
        </span>
        <div className="self-start">
          <Image
            alt="icon-cart"
            src={"/images/logo.svg"}
            width={150}
            height={150}
          />
        </div>
      </div>

      <div className="flex-container-row">
        <div className="relative">
          {cartItems.length >=1 &&
          <div className="absolute -top-3 -right-1 text-white bg-[#ff7d1a] w-4 h-4 flex items-center justify-center rounded-md">
            <h3 className="font-bold text-sm">{cartItems.length }</h3>
          </div>
          }
          
          <Image
            alt="icon-cart"
            src={"/images/icon-cart.svg"}
            width={20}
            height={20}
            className=""
            onClick={() => setShowCart(!showCart)}
          />
        </div>

        <Image
          alt="people profile pic"
          src={"/images/image-avatar.png"}
          width={30}
          height={30}
        />
      </div>
    </header>
  );
};

export default Header;
