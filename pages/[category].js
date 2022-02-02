import { Button } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MainHeader from "../components/Layout/MainHeader";
import LargeCard from "../components/Cards/LargeCard";
import MediumHCard from "../components/Cards/MediumHCard";
import MediumVCard from "../components/Cards/MediumVCard";
import SmallHCard from "../components/Cards/SmallHCard";
import SmallVCard from "../components/Cards/SmallVCard";
import Heading from "../components/Utilities/Heading";
import API from "../service/API";

const NewsBasedOnCaategory = ({articles,headerCategory}) => {
  const router = useRouter();
  let { category,page,limit } = router.query;
  // const [paginate,setPaginate] = useState({start})
  // console.log(category)
  const fetchPost = (page)=>{
    router.push({
      pathname:`/${category}`,
      query:{
        page,
        limit
      }
    })
  }
  return (
    <>
      <Head>
        <title> {category ? category : "Loading"} - Read NewsBay</title>
      </Head>
      <MainHeader category={headerCategory} />
      <div className="w-4/5 md:max-w-[600px] mx-auto">
        <Heading title={category} color="black" />
        <div className="flex flex-wrap justify-center md:justify-between items-center w-full py-5">
          {!articles.length && <h3>No More Acticles To Read !!</h3> }
          {articles && articles.map((post,i)=><LargeCard key={i} post={post}/>)}
        </div>
        {page>1 && 
        <Button variant="outlined" color="warning" onClick={()=>fetchPost(--page)}>Prev</Button>
        }
        {articles.length >= limit &&
        <Button variant="outlined" color="warning" onClick={()=>fetchPost(++page)}>Next</Button>
        }
      </div>
    </>
  );
};

export default NewsBasedOnCaategory;
export async function getServerSideProps(context){
  const {query} = context
  let {page,limit,category} = query
  category = category.toLowerCase()
  page = parseInt(page)
  limit = parseInt(limit)
  let start = (page - 1)*limit
  let end = limit + start
  // console.log(start,end,page,limit)
  // console.log(context)

  const headerCategory = (await API.get("/category")).data.category;

  const articles = (await API.get(`getArticles?category=${category}&start=${start}&end=${end}`)).data
  return {
    props:{
      articles,
      headerCategory
    }
  }
}