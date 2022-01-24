import Image from "next/image";
import React from "react";

const dashboard = () => {
  return (
    <main className="flex flex-wrap justify-around items-center p-3 md:w-3/4 mx-auto space-x-6">
      <div className="h-48 w-48 py-3 flex flex-col items-center justify-center border shadow-md space-y-3">
        {/* <FontAwesomeIcon icon={faFolder} className="h-10 w-10 text-gray-700" /> */}
        <center className="bg-gray-300 w-full py-3">Total Post</center>
        <center className="text-xl">3</center>
      </div>
      <div className="h-48 w-48 py-3 flex flex-col items-center justify-center border shadow-md space-y-3">
        {/* <FontAwesomeIcon
          icon={faFileArchive}
          className="h-10 w-10 text-gray-700"
        /> */}
        <center className="bg-gray-300 w-full py-3">Unpublished Post</center>
        <center className="text-xl">3</center>
      </div>
      <div className="flex flex-col flex-grow p-4 justify-center items-center shadow-md">
        <div className="h-32 w-32 relative">
          {/* <Image
            src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
            layout="fill"
            objectFit="contain"
          /> */}
        </div>
        <h3 className="text-xl my-2">Divyanshu Kaushik</h3>
        <h3 className="bg-blue-300 text-blue-600 w-full text-center py-3">
          Role: <strong>Admin</strong>
        </h3>
        <div className="mt-2 space-y-2">
          <h3 className="text-2xl text-gray-500">Contact</h3>
          <h5 className="">Email : divyanshukauhsik@gmail.com</h5>
          <h5 className="">Phone : 7974707475</h5>
        </div>
      </div>
    </main>
  );
};

export default dashboard;
