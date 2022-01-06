import Head from "next/head";
import MainHeader from "../components/Layout/MainHeader";
import LargeCard from "../components/NewsCards/LargeCard";
import MediumHCard from "../components/NewsCards/MediumHCard";
import MediumVCard from "../components/NewsCards/MediumVCard";
import SmallHCard from "../components/NewsCards/SmallHCard";
import SmallVCard from "../components/NewsCards/SmallVCard";
import Heading from "../components/Utilities/Heading";
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
      <div className="w-2/3 mx-auto">
      <Heading title="Small H Card" color="blue-500" />
        <div className="flex flex-wrap w-full md:px-20 py-5">
          <SmallHCard />
          <SmallHCard />
          <SmallHCard />
          <SmallHCard />
          <SmallHCard />
          <SmallHCard />
        </div>
      </div>
      <div className="w-2/3 mx-auto">
      <Heading title="Small V Card" color="green-500" />
        <div className="flex flex-wrap w-full md:px-20 py-5">
          <SmallVCard />
          <SmallVCard />
          <SmallVCard />
          <SmallVCard />
          <SmallVCard />
          <SmallVCard />
        </div>
      </div>
      <div className="w-2/3 mx-auto">
        <Heading title="Medium H Card" color="purple-500" />
        <div className="flex flex-wrap w-full md:px-20 py-5">
          <MediumHCard />
          <MediumHCard />
        </div>
      </div>
      <div className="w-2/3 mx-auto">
        <Heading title="Medium V Card" color="black" />
        <div className="flex flex-wrap w-full md:px-20 py-5">
          <MediumVCard />
          <MediumVCard />
          <MediumVCard />
          <MediumVCard />
          <MediumVCard />
        </div>
      </div>
      <div className="w-4/5 mx-auto">
      <Heading title="Large Card" color="red-500" />
        <div className="flex flex-wrap w-full md:px-20 py-5">
          <LargeCard />
          <LargeCard />
          <LargeCard />
          <LargeCard />
          <LargeCard />
        </div>
      </div>
    </>
  );
}
