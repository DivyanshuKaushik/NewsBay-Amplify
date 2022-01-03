import React, { useState } from "react";
import ModalRegular from "../Utilities/ModalRegular";
import Button from "@material-tailwind/react/Button";
import { FaTrash } from "react-icons/fa";

const DeletePost = ({post}) => {
    const [showModal, setShowModal] = useState(false);
    const { id, title, summary, imageUrl, category, author, time, published } = post;
    return (
      <>
        <button
          className="text-red-400 focus:outline-none flex text-sm items-center"
          onClick={() => setShowModal(true)}
        >
          <FaTrash size={13} /> <strong>Delete</strong> 
        </button>
        <ModalRegular
          showModal={showModal}
          setShowModal={setShowModal}
          title="Delete Post"
          size="sm"
        >
         <p className="text-red-500">Are you sure you want to delete - </p>
         <h3 className="text-sm text-gray-700"><strong>{title}</strong>?</h3>
         <div className="flex justify-between mt-3">
         <Button
            color="deepOrange"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
        >
            Yes
        </Button>
         <Button
            color="lightGreen"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={()=>setShowModal(false)}
        >
            No
        </Button>
         </div>
        </ModalRegular>
      </>
    );
  };
export default DeletePost
