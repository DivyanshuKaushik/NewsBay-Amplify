import Image from "next/image";
import React, { useState } from "react";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import ViewPost from "./ViewPost";

const PostItem = ({ postData,sNum }) => {
    const { id, title, summary, imageUrl, category,source, author, time,tags, published }=postData;
  return (
    <article className={`flex flex-col md:flex-row justify-between md:items-center px-2 py-3 border-b w-full ${sNum%2 ? 'bg-white': 'bg-gray-100' }`}>
        <h3 className="text-sm text-gray-800">
        <span className="mr-2">{sNum+1})</span>
          {title}
          <span className="text-xs uppercase text-red-500">~{category}</span>
        </h3>
        {/* <ul className="flex space-x-2 my-2">
          {tags.map((tag,i)=><li key={i} className="text-xs">#{tag}</li>)}
        </ul> */}
        <div className="flex justify-end space-x-4 px-3 mt-2 md:mt-0">
          <ViewPost post={postData} />
          <EditPost post={postData} />
          <DeletePost post={postData} />
        </div>
    </article>
  );
};

export default PostItem;
