import React, { useState } from "react";
import Textarea from "@material-tailwind/react/Textarea";
import Category from "../../components/Utilities/Category";
import InputOutline from "../../components/Utilities/InputOutline";
import Label from "@material-tailwind/react/Label";
import Button from "@material-tailwind/react/Button";
import Protected from "../../components/Utilities/Protected";

const Create = () => {
  const [category, setCategory] = useState("");
  const post = (e) => {
    e.preventDefault();
  };
  const onChange = () => {};
  return (
    <Protected>
      <main className="md:w-3/4 flex-col justify-center items-center h-full mx-auto border p-6 my-4 md:mt-10 shadow-md rounded-md">
        <center className="text-2xl text-gray-600 my-2">Create New Post</center>
        <form
          className="flex flex-col w-full md:w-2/3 justify-center items-center mx-auto space-y-5"
          onSubmit={(e) => post(e)}
        >
          <div className="flex items-center w-full">
            <InputOutline placeholder="Title" onChange={onChange} />
          </div>
          <div className="flex items-center w-full">
            <Textarea
              color="orange"
              size="sm"
              outline={true}
              placeholder="Summary"
            />
          </div>
          <div className="flex items-center w-full">
            <InputOutline placeholder="Source" onChange={onChange} />
          </div>
          {category && <Label color="orange">{category}</Label>}
          <div className="flex justify-center md:justify-between items-center w-full flex-wrap-reverse md:flex-nowrap">
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
          <div className="flex justify-center items-center w-full">
            <Button
              color="lightGreen"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="light"
            >
              Post
            </Button>
          </div>
        </form>
      </main>
    </Protected>
  );
};

export default Create;
