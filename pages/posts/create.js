import React, { useState } from "react";
import Protected from "../../components/Utilities/Protected";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import API from "../../service/API";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Create = ({ category }) => {
  const categories = category.map((cat) => ({
    label: cat.category,
    id: cat.category,
  }));

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    source: "",
    category: "",
    tags: "",
    type: "breaking",
    image: "",
    author: "Divyanshu Kaushik",
    user: "divyanshu",
  });
  const postData = async(e) => {
    e.preventDefault();
    const message = (await API.post('/articles',formData)).data.message
    if(!message){
      alert("Error Posting Article!!")
    }
    alert(message)
  };

  const handleImageInput = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setFormData({ ...formData, image: e.target.result });
    };
  };
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  return (
    <Protected>
      <main className="h-full w-full px-6">
        <form className="h-full w-full md:w-4/5 flex flex-wrap-reverse justify-between items-center mx-auto my-8" onSubmit={postData}>

        {/* submit button for mobile view */}
        <button type="submit" className="block md:hidden w-4/5 mx-auto my-4 py-2 bg-blue-600 text-white font-semibold rounded-md">POST</button>
          {/* image section  */}
          <div className="w-4/5 md:w-2/5 relative p-4 h-[300px] bg-gray-200 flex items-center justify-center mx-auto">
            {!formData.image ? (
              <>
                <input
                  type="file"
                  className="opacity-0 absolute z-10 h-full w-full"
                  accept=".png, .jpg, .jpeg, .svg"
                  onChange={handleImageInput}
                />
                <center className="h-full w-full">
                  click here to choose image
                </center>
              </>
            ) : (
              <>
                <Image src={formData.image} objectFit="fill" layout="fill" />
                <button
                  className="absolute -top-5 right-0 text-red-500 font-bold"
                  onClick={() => setFormData({ ...formData, image: "" })}
                >
                  Remove
                </button>
              </>
            )}
          </div>
          {/*all text input  */}
          <div className="w-4/5 md:w-1/2 flex flex-col justify-center items-center space-y-5 mx-auto mb-6 md:mb-0">
            {/* title  */}
            <TextField
              label="Title"
              name="title"
              onChange={handleInput}
              variant="outlined"
              className="w-full"
            />
            {/* summay  */}
            <TextField
              label="Summary"
              name="summary"
              onChange={handleInput}
              variant="outlined"
              className="w-full"
            />
            {/* sopurce  */}
            <TextField
              label="Source"
              name="source"
              onChange={handleInput}
              variant="outlined"
              className="w-full"
            />
            {/* category selector  */}
            {categories.length && (
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={categories}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => (
                  <TextField {...params} label="Category" name="category" />
                )}
                className="w-full"
                onChange={(e, value) =>
                  setFormData({ ...formData, category: value && value.label })
                }
              />
            )}
            {/* Tags Separated by comma  */}
            <TextField
              label="Add Tags - tag1,tag2,tag3"
              name="tags"
              onChange={handleInput}
              variant="outlined"
              className="w-full"
            />
            <button type="submit" className="hidden md:block w-full bg-blue-600 py-2 text-white font-semibold rounded-md">POST</button>
          </div>
        </form>
      </main>
    </Protected>
  );
};

export default Create;

export async function getStaticProps() {
  const category = (await API.get("/category")).data.category;
  return {
    props: {
      category,
    },
  };
}
