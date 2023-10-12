"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavItems from "./NavItems";



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
   const [isLgWidth,setIsLgWidth]=useState(screenWidth >=1024?true:false)
   const seeWidht=()=>{
    if(screenWidth >=1024){
        setIsOpen(false)
        setIsLgWidth(true)
        
    }else{
        setIsLgWidth(false)
        
    }
  } 
 

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
   
  }, []);
 
  useEffect(()=>{
    seeWidht()

  },[screenWidth])

 
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
     {isLgWidth && <div>
        <NavItems row="row"/>
        </div>}
    </>
  );
};

export default NavBar;
