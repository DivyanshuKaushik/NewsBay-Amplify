import React from "react";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
const category = [
  "sports",
  "bussiness",
  "national",
  "state",
  "local",
  "media",
  "bollywood",
  "tech"
];
const Category = ({setCategory}) => {
  return (
    <Dropdown
      color="orange"
      placement="bottom-start"
      buttonText="Category"
      buttonType="filled"
      size="sm"
      rounded={false}
      block={false}
      ripple="light"
      className="bg-orange-400"
    >
      {category.map((cat)=>
      <DropdownItem key={cat} color="orange" ripple="light"onClick={(e)=>setCategory(cat)}>
       <center className="uppercase text-sm">{cat}</center> 
      </DropdownItem>
      )}
    </Dropdown>
  );
};

export default Category;
