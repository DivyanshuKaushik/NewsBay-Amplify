import Image from "next/image";
import React, { useState } from "react";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import PostStatus from "./PostStatus";
import ViewPost from "./ViewPost";

const PostItem = ({ postData,sNum }) => {
    const { id, title, summary, image, category,source, author, time,tags, published }=postData;
  return (
    <article className={`shadow-md rounded-md flex flex-col w-5/6 md:max-w-sm m-2 justify-center items-center p-3 bg-slate-100`}>
        <h3 className="text-sm text-gray-800">
          {title}
          <span className="text-xs uppercase text-red-500">~{category}</span>
        </h3>
        <div className="flex justify-end space-x-4 px-3 mt-2">
          <ViewPost post={postData} />
          <EditPost post={postData} />
          <DeletePost post={postData} />
          <PostStatus post={postData} />
        </div>
    </article>
  );
};

export default PostItem;
