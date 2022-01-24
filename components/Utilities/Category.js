import React from "react";
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
    // <Dropdown
    //   color="orange"
    //   placement="bottom-start"
    //   buttonText="Category"
    //   buttonType="filled"
    //   size="sm"
    //   rounded={false}
    //   block={false}
    //   ripple="light"
    //   className="bg-orange-400"
    // >
    //   {category.map((cat)=>
    //   <DropdownItem key={cat} color="orange" ripple="light"onClick={(e)=>setCategory(cat)}>
    //    <center className="uppercase text-sm">{cat}</center> 
    //   </DropdownItem>
    //   )}
    // </Dropdown>
    <h3>category</h3>
  );
};

export default Category;
