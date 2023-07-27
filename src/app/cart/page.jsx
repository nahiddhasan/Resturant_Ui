import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="flex gap-4 p-4 text-red-500 flex-col h-[calc(100vh-5rem)] lg:flex-row ">
      {/* Product Container  */}
      <div className="h-1/2 p-4 flex flex-col lg:justify-center overflow-scroll   lg:h-full lg:w-1/2 2xl:w-1/2 lg:px-20 xl:px -40">
        {/* Single CartItem  */}
        <div className="flex justify-between items-center mb-4">
          <Image className="object-contain" src="/temporary/p1.png" width={50} height={50} alt="" />
          <div>
            <h1 className="uppercase font-bold text-xl">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>

        {/* Single CartItem  */}
        <div className="flex justify-between items-center mb-4">
          <Image src="/temporary/p1.png" width={50} height={50} alt="" />
          <div>
            <h1 className="uppercase font-bold text-xl">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>

        {/* Single CartItem  */}
        <div className="flex justify-between items-center mb-4">
          <Image src="/temporary/p1.png" width={50} height={50} alt="" />
          <div>
            <h1 className="uppercase font-bold text-xl">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>

        {/* Single CartItem  */}
        <div className="flex justify-between items-center mb-4">
          <Image src="/temporary/p1.png" width={50} height={50} alt="" />
          <div>
            <h1 className="uppercase font-bold text-xl">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* Payment Container  */}
      <div className="bg-fuchsia-50 h-1/2 p-4 flex flex-col justify-center gap-4 lg:h-full lg:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        
        <div className="flex justify-between">
            <span>Subtotal (3 item)</span>
            <span>$81.70</span>
        </div>
        <div className="flex justify-between">
            <span>Service Cost</span>
            <span>$0.00</span>
        </div>
        <div className="flex justify-between">
            <span>Delevery Charge</span>
            <span className="text-green-500">Free!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
            <span>TOTAL (INCL. VAT)</span>
            <span className="font-bold">$81.70</span>
        </div>
        <button className="bg-red-500 text-white rounded-md p-2 w-1/2 self-end">CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartPage;
