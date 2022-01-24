import React, { useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import Modal from "../Utilities/Modal";
import API from '../../service/API'

const DeletePost = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  const { sk, image, title } = post;
  const buttonRef = useRef();

  const deletePost = async()=>{
    const message = (await API.delete(`/deletePost?id=${sk}&image=${image}`)).data.message
    alert(message)
  }
  return (
    <>
      <Modal btnName="delete" btnColor="error" title="Delete">
        <p className="text-red-500">Are you sure you want to delete - </p>
        <h3 className="text-sm text-gray-700">
          <strong>{title}</strong>?
        </h3>
        <div className="flex justify-between">
          <button className="bg-yellow-500 font-semibold py-1 px-4 text-white text-sm rounded-sm" >No</button>
          <button className="bg-red-500 font-semibold py-1 px-4 text-white text-sm rounded-sm" onClick={deletePost}>Yes</button>
        </div>
      </Modal>
    </>
  );
};
export default DeletePost;
