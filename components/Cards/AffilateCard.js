import React from "react";
import Link from "next/link";
import Image from "next/image";

const AffilateCard = () => {
  return (
    // <Link href={`/${category}/${slug}-${id}`}>
    //   <a>
        <article className="flex h-20 w-72 m-1 group shadow-lg rounded-md ">
          <div className="relative h-full w-2/3 rounded-md">
            <Image
              src="https://images.unsplash.com/photo-1496243975092-6ec259c776e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              layout="fill"
              objectFit="fill"
              className="card-image rounded-md"
            />
          </div>
          <div className="p-1 ml-3 flex flex-col justify-between">
            <p className="text-md leading-snug font-medium text-gray-900 group-hover:text-yellow-600 transition-all duration-200">
             Iphone 11 latest 121 GB RAM 256Gb
            </p>
          </div>
        </article>
    //   </a>
    // </Link>
  );
};

export default AffilateCard;
