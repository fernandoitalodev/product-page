import Image from "next/image"
import { FunctionComponent, useContext } from "react"
import { CartContext } from "./context/CartContext"

export interface itemsType{
    name:string,
    quant:number,
    price:number,
    image:string,
    idItem:number
}
const ItemsCart: FunctionComponent<itemsType>=({name,quant,price,image,idItem})=>{
    const {cartItems,setCartItems}=useContext(CartContext)
    const totalPrice=(quant:number,price:number)=>{
       return String(quant * price)
    }
    const deleteItem=()=>{
           
     const newArr= cartItems.filter((el)=>el.idItem !== idItem)
     setCartItems([...newArr])
    }
    return(
        <div className="flex justify-around w-full items-center p-2 gap-6">
            <div className="">
                <Image src={image} alt="sneakers product preview" height={70} width={70} className="rounded-lg"/>
            </div>
            <div className="text-slate-600  ">
                <h3 className="">{name} <br/> ${String(price)}x {String(quant)}=<b className="text-black">${totalPrice(quant,price)}</b></h3>
            </div>
            <div className="">
            <Image src={"/images/icon-delete.svg"} alt="trash icon" height={20} width={20} className="" onClick={()=>deleteItem()} />
            </div>
        </div>
    )
    }

    export default ItemsCart