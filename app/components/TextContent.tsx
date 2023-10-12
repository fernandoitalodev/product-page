"use client"
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { CartContext } from './context/CartContext'

const TextContent = () => {
   const[quant,setQuant]=useState(0)
   const {cartItems,setCartItems}=useContext(CartContext)
   const modifyQuant=(operation)=>{
      
      if(operation=="sun"){
        setQuant(quant=>quant+1)
      }else{
        if(quant=== 0){
          return
        }else{
          setQuant((quant)=>quant-1)
        }
      }
   }
   const itemId=()=>{
    const aleatoryNumber = Math.floor(1000 + Math.random() * 9000)
  return aleatoryNumber;
   }
   const addItem=()=>{
       const idItem= itemId()
      if(quant >=1){
        setCartItems([...cartItems,{name:"Fall Limited Edition Sneakers",price:127,quant:quant,image:"/images/image-product-1-thumbnail.jpg",idItem:idItem}])
        setQuant(0)

      }
   }
  return (
    <div className='flex-col flex p-4  lg:w-10/12'>
          <h2 className="font-bold text-lg text-[#ff7d1a] my-2">SNEAKER COMPANY</h2>
          <h1 className="text-3xl font-bold ">Fall Limited Edition Sneakers</h1>
          <p className="text-slate-400 py-2">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubbler outer sole, they&apos;ll withstand everything the weather can offer</p>

          <div className="flex m-4 justify-between items-center">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold rounded-lg">$125.00</h2>
              <h3 className="font-bold text-[#ff7d1a] bg-[#ff7d1a15] rounded-md p-1">50%</h3>
            </div>
            <div className="">
              <h3 className="text-slate-400 font-bold ">  <s>$250.00</s></h3>
            </div>
          </div>

          <div className="lg:flex items-center justify-start">

<div className="flex justify-around p-4 m-4 bg-[#e5e2e234] rounded-lg items-center lg:w-32">
  <Image src={"/images/icon-minus.svg"} className='w-4 h-2' alt='' width={8} height={4} onClick={()=>modifyQuant("minus")}/>
  <h3 className="font-bold"> {quant}</h3>
  <Image src={"/images/icon-plus.svg"} alt='' className='w-4 h-4' width={32} height={8} onClick={()=>modifyQuant("sun")} />

</div>
<div onClick={()=>addItem()} className=' btn-orange'> <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero"/></svg>Add to Cart</div>

          </div>
    </div>
  )
}

export default TextContent