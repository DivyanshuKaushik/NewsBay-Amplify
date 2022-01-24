import React from "react";
import Image from "next/image";
import Ads from "../components/Utilities/Ads";
import SmallVCard from "../components/NewsCards/SmallVCard";
import SmallHCard from "../components/NewsCards/SmallHCard";
import Heading from "../components/Utilities/Heading";
import API from "../service/API";
import Head from "next/head";

const Article = ({ article ,related }) => {
  const { title, image, category, source, author, time,summary,tags } = article;
  return (
    <>
      <Head>
        <title>{title} - NewsBay</title>
        <meta name="title" property="og:title" content={title} />
        <meta name="description" property="og:description" content={summary} />
        <meta name="author" property="og:author" content={author} />
        <meta name="keywords" property="og:keywords" content={tags} />
      </Head>
      <main className="grid grid-cols-1 md:grid-cols-3 w-5/6 mx-auto py-10 gap-6 md:gap-0">
        {article && (
          <article className="md:col-span-2">
            <h1 className="text-2xl md:text-4xl mb-6 font-medium capitalize text-gray-800 leading-relaxed">
              {title}
            </h1>
            <div className="relative h-96 md:h-[500px] w-full md:w-4/5">
              <Image src={image} layout="fill" objectFit="fill" />
              <span className="absolute bottom-0 text-white text-xs font-light px-2 bg-black capitalize">
                {category}
              </span>
            </div>
            <span className="text-sm text-gray-500 italic block my-5">
              By -<strong className="text-black">{author}</strong> -{time}
            </span>
            <p className="text-lg text-gray-600 text-justify md:pr-10">
              {summary}
            </p>
          </article>
        )}
        <center>
          <Ads />
        </center>
        <div className="mt-10">
          <Heading title="Related Articles" color="black" />
          <div className="flex flex-wrap">
          {related && related.map((post)=><SmallVCard key={post.id} post={post} />)}
          </div>
        </div>
        <aside className="flex flex-wrap space-y-5 justify-center">
          <Ads />
          <Ads />
          <Ads />
          <SmallHCard />
          <SmallHCard />
          <SmallHCard />
          <SmallHCard />
        </aside>
      </main>
    </>
  );
};

export default Article;

export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params.article;
  let id = slug[1].split("-").reverse()[0];
  let article = {};
  let related = {};
  if (slug.length > 1 && slug.length < 3) {
    article = (
      await API.get(`/getArticles?category=${slug[0].toLowerCase()}&id=${id}`)
    ).data.article;
    related = (
      await API.get(`/getArticles?category=${slug[0].toLowerCase()}&start=0&end=3`)
    ).data.articles;
  }
  //   console.log('article',article);
  related = related.filter((post)=>post.id != id)
  return {
    props: {
      article,
      related
    },
  };
}
