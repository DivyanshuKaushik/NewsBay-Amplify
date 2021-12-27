import React from "react";
import AddCategory from "../components/Categories/AddCategory";
import Categories from "../components/Categories/Categories";

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

const categories = () => {
  return (
    <main className="flex flex-col w-5/6 md:2/3 mx-auto">
      <section className="p-4 space-y-4 border-b">
        <h3 className="text-2xl">News Categories</h3>
        <Categories categories={category} />
        <center className="text-sm font-light text-orange-300 uppercase mt-3">click the close icon to remove category</center>
      </section>
      <section className="p-4 space-y-4">
      <h3 className="text-2xl">Add New Category</h3>
        <AddCategory />
      </section>
    </main>
  );
};

export default categories;
