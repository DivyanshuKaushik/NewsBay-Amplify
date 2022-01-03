import Image from "next/image";
import React, { useState } from "react";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import ModalRegular from "../Utilities/ModalRegular";
import { FaEye } from "react-icons/fa";

const ViewPost = ({ post }) => {
  const {
    id,
    title,
    summary,
    imageUrl,
    category,
    source,
    author,
    time,
    tags,
    published,
  } = post;
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="text-red-400 focus:outline-none flex text-sm items-center"
        onClick={() => setShowModal(true)}
      >
        {/* <FontAwesomeIcon icon={faEye} className="h-3.5" /> */}
        <FaEye size={14} className="mr-0.5" />
        <strong>View</strong>
      </button>
      <ModalRegular
        showModal={showModal}
        setShowModal={setShowModal}
        close={true}
        title="Viewing Post"
      >
        <article className="w-full h-full">
          <div className="flex w-full h-full flex-wrap md:flex-nowrap">
            <div className="">
              <h3 className="text-2xl text-gray-700">
                {title}
                <span className="text-xs uppercase text-red-500">
                  ~{category}
                </span>
              </h3>
              <ul className="flex space-x-2 my-2 mt-4">
                {tags.map((tag, i) => (
                  <li key={i} className="text-xs">
                    #{tag}
                  </li>
                ))}
              </ul>
              <div className="flex space-x-10 text-sm text-gray-500 my-3">
                <h3 className="">{time}</h3>
                <h3 className="italic">
                  By ~ <span className="">{author}</span>
                </h3>
              </div>
              <p className="mt-4 text-sm text-gray-800 hidden md:block">Read More - {source}</p>
            </div>
            <div className="h-64 w-full md:w-1/2 md:h-48 relative">
              <Image src={imageUrl} layout="fill" className="rounded-md" />
            </div>
          </div>
          <p className="text-sm font-light my-2 text-justify pr">{summary}</p>
          <p className="mt-4 text-sm text-gray-800 md:hidden block">Read More - {source}</p>
        </article>
      </ModalRegular>
    </>
  );
};

export default ViewPost;
