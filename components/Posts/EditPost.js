import React, { useState } from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalRegular from "../Utilities/ModalRegular";
import Textarea from "@material-tailwind/react/Textarea";
import InputOutline from "../../components/Utilities/InputOutline";
import Label from "@material-tailwind/react/Label";
import Category from "../Utilities/Category";

const EditPost = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  const {
    id,
    title,
    summary,
    imageUrl,
    source,
    author,
    time,
    published,
  } = post;
  const [category, setCategory] = useState(post.category);
  // const post = (e) => {
  //   e.preventDefault();
  // };
  return (
    <>
      <button
        className="text-red-400 focus:outline-none flex text-xs md:text-sm items-center"
        onClick={() => setShowModal(true)}
      >
        <FontAwesomeIcon icon={faEdit} className="h-3.5" />
        <strong>Edit</strong>
      </button>
      <ModalRegular
        showModal={showModal}
        setShowModal={setShowModal}
        close={true}
        save={true}
        title="Edit Post"
      >
        <form
          className="flex flex-col w-full justify-center items-center mx-auto space-y-5"
          // onSubmit={(e) => post(e)}
        >
          <div className="flex items-center w-full">
            <InputOutline placeholder="Title" value={title} />
          </div>
          <div className="flex items-center w-full">
            <Textarea
              color="orange"
              size="sm"
              outline={true}
              placeholder="Summary"
              value={summary}
            />
          </div>
          <div className="flex items-center w-full">
            <InputOutline placeholder="Source" value={source} />
          </div>
          {category && <Label color="orange">{category}</Label>}
          <div className="flex justify-center md:justify-between items-center flex-wrap-reverse md:flex-nowrap">
            <div className="">
              <label htmlFor="imageUrl" className="text-gray-600">
                Image
              </label>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg"
                className="mt-4 md:mt-0 ml-2"
              />
            </div>
            <Category setCategory={setCategory} />
          </div>
        </form>
      </ModalRegular>
    </>
  );
};

export default EditPost;
