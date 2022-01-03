import React from "react";
import { FaTimes } from "react-icons/fa";
const Categories = ({ categories }) => {
  return (
    <div className="my-2 w-full">
      <ul className="flex flex-wrap items-center justify-center space-x-4 md:space-y-0">
        {categories.map((categories,i) => (
          <li key={i} className="bg-orange-200 py-2 px-3 my-2 text-sm text-orange-500 uppercase rounded-3xl shadow-md-orange flex items-center space-x-2">
            <strong>{categories}</strong> <FaTimes size={15} className="cursor-pointer"/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
 