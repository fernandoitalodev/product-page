"use client";
import { createContext, useEffect, useState } from "react";
import { itemsType } from "../ItemsCart";
export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<itemsType[]>([]);

  

  return (
    <CartContext.Provider
      value={{ showCart, setShowCart, cartItems, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
