"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavItems from "./NavItems";



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
 
  return (
    <>
      <div className="lg:hidden">
        <Image
          alt="icon-cart"
          src={"/images/icon-menu.svg"}
          width={16}
          height={20}
          onClick={()=>setIsOpen(!isOpen)}
        />
      </div>

     {isOpen && <div  className="fixed w-[100%] z-40 left-0 bg-[#030303c7] top-0 h-[100vh]">
         <div className="absolute z-50 w-[50%] h-[100vh] top-0 bg-white flex flex-col gap-8 p-4 border">
         <Image
              alt="icon close"
              src={"/images/icon-close.svg"}
              width={16}
              height={16}
              onClick={()=>setIsOpen(!isOpen)}
            />
            
            <NavItems/>
            </div>
     </div>} 
     <div className="lg:block hidden">
        <NavItems row="row"/>
        </div>
    </>
  );
};

export default NavBar;
