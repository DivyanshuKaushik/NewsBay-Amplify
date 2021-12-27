import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Categories = ({ categories }) => {
  return (
    <div className="my-2 w-full">
      <ul className="flex flex-wrap items-center justify-center space-x-4 md:space-y-0">
        {categories.map((categories) => (
          <li className="bg-orange-200 py-2 px-3 my-2 text-sm text-orange-500 uppercase rounded-3xl shadow-md-orange flex items-center space-x-2">
            <strong>{categories}</strong> <FontAwesomeIcon icon={faTimes} className="h-4 cursor-pointer"/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
 