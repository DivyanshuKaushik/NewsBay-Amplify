import React, { useRef, useState } from "react";
import InputOutline from "../../components/Utilities/InputOutline";
import Category from "../Utilities/Category";
import { FaEdit } from "react-icons/fa";
import Modal from "../Utilities/Modal";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const EditPost = ({ post }) => {
  const { id, title, summary, imageUrl, source, author, time, published } =
    post;
  const [category, setCategory] = useState(post.category);
  const buttonRef = useRef();
  // const post = (e) => {
  //   e.preventDefault();
  // };
  const onChange = (e) => {};
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  return (
    <>
      <Modal btnName="Edit" btnColor="warning" title="Edit Post">
      <form
          className="flex flex-col w-full justify-center items-center mx-auto space-y-5"
          // onSubmit={(e) => post(e)}
        >
          <div className="flex items-center w-full">
            <InputOutline
              placeholder="Title"
              onChange={onChange}
              value={title}
            />
          </div>
          <div className="flex items-center w-full">
            {/* <Textarea
              color="orange"
              size="sm"
              outline={true}
              placeholder="Summary"
              onChange={onChange}
              value={summary}
            /> */}
          </div>
          <div className="flex items-center w-full">
            <InputOutline
              placeholder="Source"
              onChange={onChange}
              value={source}
            />
          </div>
          {/* {category && <Label color="orange">{category}</Label>} */}
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
            <TextField
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
            {/* <Category setCategory={setCategory} /> */}
          </div>
        </form>
      </Modal>
      {/* <button
        className="text-red-500 focus:outline-none flex text-xs md:text-sm items-center"
        onClick={() => setShowModal(true)}
        ref={buttonRef}
      >
        <FaEdit size={17} />
      </button>
      <Tooltips placement="top" ref={buttonRef}>
        <TooltipsContent>Edit</TooltipsContent>
      </Tooltips>
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
            <InputOutline
              placeholder="Title"
              onChange={onChange}
              value={title}
            />
          </div>
          <div className="flex items-center w-full">
            <Textarea
              color="orange"
              size="sm"
              outline={true}
              placeholder="Summary"
              onChange={onChange}
              value={summary}
            />
          </div>
          <div className="flex items-center w-full">
            <InputOutline
              placeholder="Source"
              onChange={onChange}
              value={source}
            />
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
      </ModalRegular> */}
    </>
  );
};

export default EditPost;

