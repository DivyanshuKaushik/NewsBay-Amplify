import Head from "next/head";
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



export default function Home() {
  const user = useAuthenticatedUser();
  console.log("index page", user);
  return (
    <>
      <Head>
        <title>NewsBay App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-5/6 mx-auto flex flex-col justify-center items-center md:items-start md:flex-row md:space-x-4 my-6">
        <div className="w-full md:w-2/3">
          <Heading title="Trending Now" color="black" />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1">
              <LargeCard category="trending" />
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
          <Heading title="Ads" color="black" />
          <div className="flex flex-col items-center space-y-2 mt-2">
            <Ads />
            <Ads />
          </div>
        </div>
      </div>
      
      <div className="w-5/6 mx-auto flex flex-col justify-center items-center md:items-start md:flex-row md:space-x-4 my-6">
        <div className="w-full md:w-2/3">
          <Heading title="Lifestyle" color="green-500" />
          <div className="flex flex-wrap">
              <LargeCard category="trending" />
              <LargeCard category="trending" />
              <SmallHCard />
              <SmallHCard />
              <SmallHCard />
              <SmallHCard />
          </div>
          <PaginateBlock />
        </div>
        <div className="h-full w-full md:w-1/3">
          <Heading title="Most Popular" color="black" />
          <div className="flex flex-wrap justify-center items-center space-y-2 mt-2">
          <SmallVCard />
          <SmallVCard />
          <SmallVCard />
          <SmallVCard />
          <Ads />
          </div>
        </div>
      </div>

      <div className="w-5/6 mx-auto flex flex-col justify-center items-center md:items-start md:flex-row md:space-x-4 my-6">
        <div className="w-full md:w-2/3">
          <Heading title="House Design" color="gray-500" />
          <div className="flex flex-wrap">
          <MediumVCard />
          <MediumVCard />
          <MediumVCard />
          </div>
          <PaginateBlock />
        </div>
        <div className="h-full w-full md:w-1/3">
          <Heading title="Make It modern" color="black" />
          <div className="flex flex-wrap justify-center items-center space-y-2 mt-2">
          <SmallVCard />
          <SmallVCard />
          <SmallVCard />
          <SmallVCard />
          </div>
        </div>
      </div>

      <div className="w-5/6 mx-auto flex flex-col justify-center items-center md:items-start md:flex-row md:space-x-4 my-6">
        <div className="w-full md:w-2/3">
          <Heading title="Performance" color="purple-500" />
          <div className="flex flex-wrap">
          <MediumHCard />
          <MediumHCard />
          <MediumHCard />
          </div>
          <PaginateBlock />
        </div>
        <div className="h-full w-full md:w-1/3">
          <Heading title="Make It modern" color="black" />
          <div className="flex flex-wrap justify-center items-center space-y-2 mt-2">
          <Ads />
          <LargeCard />
          </div>
        </div>
      </div>

      <div className="w-5/6 mx-auto flex flex-col justify-center items-center md:items-start md:flex-row md:space-x-4 my-6">
        <div className="w-full md:w-2/3">
          <Heading title="Latest Article" color="gray-500" />
          <div className="flex flex-wrap">
          <LargeCard />
          <LargeCard />
          <LargeCard />
          <LargeCard />
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
