"use client"
import Image from "next/image";
import React, { FunctionComponent, useState } from "react";

const images=["/images/image-product-1.jpg","/images/image-product-2.jpg","/images/image-product-3.jpg","/images/image-product-4.jpg"]
const imagesThumbnail=["/images/image-product-1-thumbnail.jpg","/images/image-product-2-thumbnail.jpg","/images/image-product-3-thumbnail.jpg","/images/image-product-4-thumbnail.jpg"]

interface imagesType{
  className:string,
  imgSize:string
}

const ImagesCarousel: FunctionComponent<imagesType> = ({className,imgSize}) => {
  const [count,setCount]=useState(0)
  const nextImage = ()=>{
      if(count >= images.length-1){
        setCount(0)
      }else{
        setCount(count=>count+1)
      }
  }
  const prevImage = ()=>{
    if(count === 0){
      setCount(images.length-1)
    }else{
      setCount(count=>count-1)
    }
}
  return (
    <div className={className}>
      <div className="absolute flex justify-between w-full h-full items-center p-2 lg:hidden">

      <span className="border p-4 pr-5 rounded-[100%] bg-white lg:hidden">
        <Image
          src={"/images/icon-previous.svg"}
          alt="previous image icon"
          width={11}
          height={11}
          onClick={()=>prevImage()}

        />
        </span>

        <span className="border p-4 pr-5 rounded-[100%] bg-white lg:hidden">
          <Image
            src={"/images/icon-next.svg"}
            alt="next image icon"
            width={11}
            height={11}
            onClick={()=>nextImage()}
            className="translate-x-1"
          
          />
        </span>
      </div>

      <div className="flex flex-col items-center">
     
        <Image
          src={images[count]}
          alt="sneakers 1"
          className={`w-[100%] lg:w-[${imgSize}] lg:h-[${imgSize}] rounded-lg max-w-[400px]`}
          width={400}
          height={400}
        />
        <div className="hidden lg:flex justify-between p-2 py-4 gap-4">
         {
          imagesThumbnail.map((el,i)=>{
            return(
              <div key={`${i}-imagePreview`} className="">
               <Image
          src={el}
          alt="sneakers thumbnail"
          className=" rounded-lg"
          width={90}
          height={90}
          onClick={()=>setCount(i)}
        />
              </div>
            )
          })
         }
        </div>
      </div>
    </div>
  );
};

export default ImagesCarousel;
