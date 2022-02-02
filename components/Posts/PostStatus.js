import React, { useEffect, useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import Modal from "../Utilities/Modal";
import API from '../../service/API'

const PostStatus = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  const [postStatus, setPostStatus] = useState(status);
  const [statusVal, setStatusVal] = useState("");

  const { sk, image, title,status } = post;
  const buttonRef = useRef();
  useEffect(()=>{
    setPostStatus(status =="submitted" || status =="rejected" ? "published" : "rejected")
    setStatusVal(status =='published' ? "Unpublish" : "Publish")
  },[post])

  const updateStatus = async()=>{
    const message = (await API.patch(`/postStatus`,{sk,status:postStatus})).data.message
    alert(message)
  }
  return (
    <>
      <Modal btnName={statusVal} btnColor="primary" title="Delete">
        <p className="text-red-500">Are you sure you want to {statusVal} - </p>
        <h3 className="text-sm text-gray-700">
          <strong>{title}</strong>?
        </h3>
        <div className="flex justify-between">
          <button className="bg-yellow-500 font-semibold py-1 px-4 text-white text-sm rounded-sm" >No</button>
          <button className="bg-red-500 font-semibold py-1 px-4 text-white text-sm rounded-sm" onClick={updateStatus}>Yes</button>
        </div>
      </Modal>
    </>
  );
};
export default PostStatus;
