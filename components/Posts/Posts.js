import React, { useState } from "react";
import PostItem from "./PostItem";

import Link from "next/link";
import Button from "@mui/material/Button";

const Posts = ({ posts }) => {
  return (
    <section className="w-full">
      {/* <div className="flex flex-wrap w-full px-20 justify-between py-2 md:sticky bg-white md:top-14 z-30">
        <h3 className="text-2xl text-gray-600 font-semibold">Your Posts</h3>
        <div className="bg-gray-100 rounded-3xl hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search post"
            className="bg-transparent h-full outline-none px-2 pl-4 text-gray-600 text-sm"
          />
        </div>
        <Link href="/posts/create">
          <Button color="warning" variant="outlined" size="small">
            Create New Post
          </Button>
        </Link>
      </div> */}
      <ul className="w-full px-10 md:px-0 mx-auto flex flex-wrap justify-center items-center">
        {posts &&
          posts.map((data, i) => (
            <PostItem key={data.id} sNum={i} postData={data} />
          ))}
      </ul>
    </section>
  );
};

export default Posts;
