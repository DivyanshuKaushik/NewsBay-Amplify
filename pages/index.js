import { useUser } from "@auth0/nextjs-auth0";
import { Button } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import MainHeader from "../components/Layout/MainHeader";
import LargeCard from "../components/Cards/LargeCard";
import MediumHCard from "../components/Cards/MediumHCard";
import MediumVCard from "../components/Cards/MediumVCard";
import SmallHCard from "../components/Cards/SmallHCard";
import SmallVCard from "../components/Cards/SmallVCard";
import Ads from "../components/Utilities/Ads";
import AffilateCard from "../components/Cards/AffilateCard";
import Heading from "../components/Utilities/Heading";
import PaginateBlock from "../components/Utilities/PaginateBlock";
import useAuthenticatedUser from "../hooks/authenticatedUser";
import API from "../service/API";

export default function Home({ articles, category }) {
  // const user = useAuthenticatedUser();
  const { user, isLoading, error } = useUser();
  console.log(user);
  const router = useRouter();
  const loadMore = (category) => {
    router.push({
      pathname: `/${category}`,
      query: {
        page: 1,
        limit: 1,
      },
    });
  };

  return (
    <>
      <Head>
        <title>NewsBay App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader category={category} />

      {/* breaking news */}
      <section className="article_section">
        <Heading title="Breaking News" color="#f50707" />
        <main className="flex flex-wrap justify-center items-center">
          <MediumVCard />
          <MediumVCard />
          <MediumVCard />
          <MediumVCard />
          <MediumVCard />
        </main>
      </section>

      {/* latest articles  */}
      <section className="article_section">
        <Heading title="Latest Articles" color="#1c5cff" />
        <div className="flex flex-wrap justify-center md:justify-around  items-center">
          {articles && articles.map((post) => <LargeCard post={post} />)}
        </div>
      </section>

      {/* custom ads section  */}
      <section className="article_section">
        <div className="flex flex-wrap justify-between items-center space-y-8 md:space-y-0">
          <Ads />
          <Ads />
          <Ads />
        </div>
      </section>

      {/* custom ads and affilate links  */}
      <section className="article_section">
        <div className="flex">
          <div className="w-2/3 pr-3">
            <Heading title="Ads" color="#aaa000" />
            <div className="flex flex-wrap justify-around items-center space-y-8 md:space-y-0 gap-3">
              <Ads />
              <Ads />
              <Ads />
              <Ads />
            </div>
          </div>
          <div className="w-1/3 pl-3">
            <Heading title="Want to Buy ?" color="#ff7733" />
            <div className="flex flex-wrap justify-around items-center space-y-8 md:space-y-0 gap-3">
              <AffilateCard />
              <AffilateCard />
              <AffilateCard />
              <AffilateCard />
              <AffilateCard />
              <AffilateCard />
            </div>
          </div>
        </div>
      </section>

      {/* affilate links  */}
      {/* <section className="article_section">
        <Heading title="Want to Buy ?" color="#ff7733" />
        <div className="flex flex-wrap justify-between items-center space-y-8 md:space-y-0">
          <AffilateCard />
          <AffilateCard />
          <AffilateCard />
        </div>
      </section> */}
    </>
  );
}

export async function getServerSideProps() {
  const category = (await API.get("/category")).data.category;
  const articles = (
    await axios.get(
      "https://d7unnt51ud.execute-api.ap-south-1.amazonaws.com/dev/api/v1/getArticles?start=0&end=10"
    )
  ).data;
  return {
    props: {
      category,
      articles,
    },
  };
}
