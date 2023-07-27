"use client";

import React, { useEffect, useState } from "react";

const Price = ({ price, id, options }) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);
  return (
    <div className="flex flex-col gap-4">
      {/* Price */}
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* Option Container */}
      <div className="flex gap-4 flex-wrap">
        {options.map((option, index) => (
          <button
            key={option.id}
            className="p-2 min-w-[6rem] ring-1 ring-red-500 rounded-md"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* Qty add Container */}
      <div className="w-full flex justify-between items-center p-3 ring-1 ring-red-500">
        <span>Quantity</span>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            {"<"}
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
          >
            {">"}
          </button>
        </div>
      </div>
      {/* Add to cart Button  */}
      <button className="w-1/2 p-2 uppercase bg-red-500 text-white">
        Add to Cart
      </button>
    </div>
  );
};

export default Price;
