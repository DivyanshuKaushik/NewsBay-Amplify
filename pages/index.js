import { Button } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import MainHeader from "../components/Layout/MainHeader";
import LargeCard from "../components/NewsCards/LargeCard";
import MediumHCard from "../components/NewsCards/MediumHCard";
import MediumVCard from "../components/NewsCards/MediumVCard";
import SmallHCard from "../components/NewsCards/SmallHCard";
import SmallVCard from "../components/NewsCards/SmallVCard";
import Ads from "../components/Utilities/Ads";
import Heading from "../components/Utilities/Heading";
import PaginateBlock from "../components/Utilities/PaginateBlock";
import useAuthenticatedUser from "../hooks/authenticatedUser";
import API from "../service/API";


export default function Home({articles}) {
  const user = useAuthenticatedUser();
  const router = useRouter()
  const loadMore = (category)=>{
    router.push({
      pathname:`/${category}`,
      query:{
        page:1,
        limit:1
      }
    })
  }

  // console.log("index page", articles);
  return (
    <>
      <Head>
        <title>NewsBay App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button variant="outlined" color="primary" onClick={()=>loadMore("tech")}>Tech News</Button>
      {articles && articles.map((post)=><LargeCard post={post}/>)}
      <div className="w-5/6 mx-auto flex flex-col justify-center items-center md:items-start md:flex-row md:space-x-4 my-6">
        <div className="w-full md:w-2/3">
          <Heading title="Trending Now" color="black" />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1">
              {/* <LargeCard category="trending" /> */}
            </div>
            <div className="grid grid-rows-4">
              <SmallHCard />
              <SmallHCard />
              <SmallHCard />
              <SmallHCard />
            </div>
          </div>
          <PaginateBlock />
        </div>
        <div className="h-full w-full md:w-1/3">
          <Heading title="Ads" color="gray" />
          <div className="flex flex-col items-center space-y-2 mt-2">
            <Ads />
            <Ads />
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto flex flex-wrap justify-between items-center">
      <Heading title="Lifestyle" color="green" />
        <MediumVCard />
        <MediumVCard />
        <MediumVCard />
        <MediumVCard />
        <MediumVCard />
        <SmallHCard />
        <SmallHCard />
        <SmallHCard />
        <SmallHCard />
        <SmallHCard />
        {/* <LargeCard category="trending" /> */}
      </div>
      <div className="w-5/6 mx-auto flex flex-col justify-center items-center md:items-start md:flex-row md:space-x-4 my-6">
        <div className="w-full md:w-2/3">
          <Heading title="Lifestyle" color="green" />
          <div className="flex flex-wrap">
            {/* <LargeCard category="trending" /> */}
            {/* <LargeCard category="trending" /> */}
            <SmallHCard />
            <SmallHCard />
            <SmallHCard />
            <SmallHCard />
          </div>
          <PaginateBlock />
        </div>
        <div className="h-full w-full md:w-1/3">
          <Heading title="Most Popular" color="orange" />
          <div className="flex flex-wrap justify-center items-center space-y-2 mt-2">
            {/* <SmallVCard />
            <SmallVCard /> */}
            {/* <SmallVCard />
            <SmallVCard /> */}
            <Ads />
          </div>
        </div>
      </div>

      <div className="w-5/6 mx-auto flex flex-col justify-center items-center md:items-start md:flex-row md:space-x-4 my-6">
        <div className="w-full md:w-2/3">
          <Heading title="House Design" color="cyan" />
          <div className="flex flex-wrap">
            <MediumVCard />
            <MediumVCard />
            <MediumVCard />
          </div>
          <PaginateBlock />
        </div>
        <div className="h-full w-full md:w-1/3">
          <Heading title="Make It modern" color="yellow" />
          <div className="flex flex-wrap justify-center items-center space-y-2 mt-2">
            {/* <SmallVCard />
            <SmallVCard /> */}
            {/* <SmallVCard />
            <SmallVCard /> */}
          </div>
        </div>
      </div>

      <div className="w-5/6 mx-auto flex flex-col justify-center items-center md:items-start md:flex-row md:space-x-4 my-6">
        <div className="w-full md:w-2/3">
          <Heading title="Performance" color="purple" />
          <div className="flex flex-wrap">
            <MediumHCard />
            <MediumHCard />
            <MediumHCard />
          </div>
          <PaginateBlock />
        </div>
        <div className="h-full w-full md:w-1/3">
          <Heading title="Make It modern" color="blue" />
          <div className="flex flex-wrap justify-center items-center space-y-2 mt-2">
            <Ads />
            {/* <LargeCard /> */}
          </div>
        </div>
      </div>

      <div className="w-5/6 mx-auto flex flex-col justify-center items-center md:items-start md:flex-row md:space-x-4 my-6">
        <div className="w-full md:w-2/3">
          <Heading title="Latest Article" color="gray" />
          <div className="flex flex-wrap">
            {/* <LargeCard /> */}
            {/* <LargeCard /> */}
            {/* <LargeCard /> */}
            {/* <LargeCard /> */}
          </div>
          <PaginateBlock />
        </div>
        <div className="h-full w-full md:w-1/3">
          <Heading title="Popular" color="black" />
          <div className="flex flex-wrap justify-center items-center space-y-2 mt-2">
            <SmallHCard />
            <SmallHCard />
            <SmallHCard />
            <Ads />
            <SmallHCard />
            <SmallHCard />
            <SmallHCard />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(){

  const articles = (await axios.get('https://d7unnt51ud.execute-api.ap-south-1.amazonaws.com/dev/api/v2/getArticles?category=all')).data.articles
  return {
      props:{
          articles
      }
  }
}