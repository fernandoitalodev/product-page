import { FunctionComponent } from "react"
import React from 'react'
type itemsType={
    row?:string
}
    const items:string[]= ["Collections","Men","Women","About","Contact"]
const NavItems:FunctionComponent<itemsType> = ({row}) => {

  return (
    <div className=''>
       <nav className={`gap-3 flex ${row?"flex-row":"flex-col"} `}>
         {items.map((el:string,i)=>{
         return  <h2 className='font-semibold' key={i}>{el}</h2>
         })}
        </nav>
    </div>
  )
}

export default NavItems