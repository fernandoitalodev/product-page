import React, { useState } from "react";
import ImagesCarousel from "./ImagesCarousel";
import Image from "next/image";

const ImagesComponent = () => {
  const [showLightBox, setShowLightBox] = useState(false);
  return (
    <>
      <div className="" onClick={()=>setShowLightBox(!showLightBox)}>
        <ImagesCarousel className="relative" imgSize={"400px"} />
      </div>
      <div className={`${showLightBox?"":"lg:hidden "} -top-8 p-4 hidden lg:flex items-center justify-center flex-col fixed w-full h-[110vh] z-50 bg-[#242323d3] `}>
        <Image onClick={()=>{setShowLightBox(!showLightBox)}} src={"/images/icon-close.svg"} className="self-end" alt="" width={30} height={30} />
        <ImagesCarousel  className=" w-[80%] h-[80%]" imgSize={"200px"} />
      </div>
    </>
  );
};

export default ImagesComponent;
