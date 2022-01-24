import Image from "next/image";
import React, { useState } from "react";
import API from "../service/API";

const upload = () => {
  const [image,setImage] = useState(null)

  const handleInput = (e)=>{
    const file = e.target.files[0]
    console.log('image',file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e)=>{
      setImage(e.target.result)
      console.log(e.target.result);
    }
  }
  const submit = ()=>{
    const postData = {image}
    API.post('/upload',postData).then(res=>console.log(res.data)).catch(e=>console.log(e))
  }
  return (
      <main className="h-full flex flex-col justify-center items-center w-full">
          <input type="file" className="bg-gray-500" accept=".jpeg, .png, .jpg" onChange={handleInput}/>
          <button className="text-white bg-green-300 p-3" onClick={submit}>Upload</button>
          {image && 
          <>
          <div className="relative h-72 w-96">
              <Image src={image} layout="fill" objectFit="fill" />
          </div>
          <button className="text-xl text-white bg-red-300 p-3" onClick={()=>setImage(null)}>cancel</button>

          </>
          }
      </main>
  );
};

export default upload;
