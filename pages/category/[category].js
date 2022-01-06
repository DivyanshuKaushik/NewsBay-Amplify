import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import LargeCard from "../../components/NewsCards/LargeCard";
import MediumHCard from "../../components/NewsCards/MediumHCard";
import MediumVCard from "../../components/NewsCards/MediumVCard";
import SmallHCard from "../../components/NewsCards/SmallHCard";
import SmallVCard from "../../components/NewsCards/SmallVCard";
import Heading from "../../components/Utilities/Heading";

const NewsBasedOnCaategory = () => {
  const router = useRouter();
  const { category } = router.query;
  // console.log(category)
  return (
    <>
      <Head>
        <title> {category ? category : "Loading"} - Read NewsBay</title>
      </Head>
      <div className="w-2/3 mx-auto">
        <Heading title={category} color="black" />
        <div className="flex flex-wrap w-full md:px-20 py-5">
          <MediumVCard category={category} />
          <MediumVCard category={category} />
          <MediumVCard category={category} />
          <SmallHCard category={category} />
          <SmallHCard category={category} />
          <SmallHCard category={category} />
          <SmallHCard category={category} />
          <SmallHCard category={category} />
          <SmallHCard category={category} />
          <MediumHCard category={category} />
          <MediumHCard category={category} />
          <MediumHCard category={category} />
          <MediumVCard category={category} />
          <MediumVCard category={category} />
          <MediumVCard category={category} />
          <LargeCard category={category} />
          <LargeCard category={category} />
        </div>
      </div>
    </>
  );
};

export default NewsBasedOnCaategory;
