import Link from "next/link";
import React from "react";
import { Menu } from "@/data";
const page = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 flex items-center flex-col md:flex-row h-[calc(100vh-5rem)]">
      {Menu.map((cat) => (
        <Link
          key={cat.id}
          href={`/menu/${cat.slug}`}
          className="w-full p-8 h-1/3 md:h-[60%] bg-cover"
          style={{ backgroundImage: `url(${cat.img})` }}
        >
          <div className={`text-${cat.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{cat.title}</h1>
            <p className="text-sm my-4">{cat.desc}</p>
            <button
              className={` hidden xl:block bg-${cat.color} text-${
                cat.color === "black" ? "white" : "red-500"
              } py-1 px-4 rounded-md `}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;
