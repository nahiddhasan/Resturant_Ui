import Image from "next/image";
import React from "react";
import { singleProduct } from "@/data";
import Price from "@/components/price/Price";

const SingleProduct = () => {
  return (
    <div className=" flex flex-col p-4 lg:px-20 xl:px-40 h-screen justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* Image continer */}
      <div className="relative w-full h-[40%] md:h-[70%]">
        <Image src={singleProduct.img} fill alt="" className="object-contain" />
      </div>
      {/* Text continer */}
      <div className="h-[60%] flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 lg:gap-8">
        <h1 className="text-3xl uppercase font-bold xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
