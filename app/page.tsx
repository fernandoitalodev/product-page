"use client"
import { useContext } from 'react'
import TextContent from './components/TextContent'
import { CartContext } from './components/context/CartContext'
import ImagesComponent from './components/ImagesComponent'


export default function Home() {
  const {showCart,setShowCart}=useContext(CartContext)
  const closeCart=()=>{
    if(showCart){
      setShowCart(!showCart)
    }
  }
  return (
    <main onClick={()=>closeCart()}  className="flex  flex-col items-center justify-between lg:flex-row lg:justify-center lg:w-9/12 m-auto lg:gap-8 lg:p-8 ">
     
    <ImagesComponent/>
     <TextContent/>

    </main>
  )
}
