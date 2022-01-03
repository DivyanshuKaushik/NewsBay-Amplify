import { Auth } from "aws-amplify";
import Router,{ useRouter } from "next/router";
import React, { useEffect } from "react";
import AddCategory from "../components/Categories/AddCategory";
import Categories from "../components/Categories/Categories";
import Protected from "../components/Utilities/Protected";
import useAuthenticatedUser from "../hooks/authenticatedUser";

const category = [
  "sports",
  "bussiness",
  "national",
  "state",
  "local",
  "media",
  "bollywood",
  "tech"
];

const categories = () => {
  const router = useRouter()
  // const user = useAuthenticatedUser()
  // useEffect(()=>{
  //   checkUser()
  //   async function checkUser(){
  //     try{
  //       const user = await Auth.currentAuthenticatedUser()
  //       if(!user)router.push('/auth/signin')
  //           // console.log(user)
  //       }catch(err){
  //         console.log(err);
  //       }
  //   }

  // },[])
  return (
    <Protected >

    <main className="flex flex-col w-5/6 md:2/3 mx-auto">
      <section className="p-4 space-y-4 border-b">
        <h3 className="text-2xl">News Categories</h3>
        <Categories categories={category} />
        <center className="text-sm font-light text-orange-300 uppercase mt-3">click the close icon to remove category</center>
      </section>
      <section className="p-4 space-y-4">
      <h3 className="text-2xl">Add New Category</h3>
        <AddCategory />
      </section>
    </main>
    </Protected>
  );
};

export default categories;
