import "../styles/globals.css";
import React from 'react';
// auth0
import { UserProvider } from "@auth0/nextjs-auth0";

// aws configuration
// import Amplify from "aws-amplify";
// import awsmobile from "../aws-exports";

// Amplify.configure({
//   ...awsmobile,
//   ssr: true,
// });

import Header from "../components/Layout/Header";
import Head from "next/head";
import useAuthenticatedUser from "../hooks/authenticatedUser";
import CategoryHeader from "../components/Layout/CategoryHeader";
import MainHeader from "../components/Layout/MainHeader";

import Router from "next/router";

import ProgressBar from "@badrap/bar-of-progress";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import API from "../service/API";

const progress = new ProgressBar({
  size: 4,
  color: "#2061c9",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps,category }) {
  const [loading, setLoading] = useState(false);
  const user = useAuthenticatedUser() || true;
  // Router.events.on('routeChangeStart',()=>setLoading(true))
  // Router.events.on('routeChangeComplete',()=>setLoading(false))
  // Router.events.on('routeChangeError',()=>setLoading(false))
  console.log(category)
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
      </Head>
      {user && <Header />}
      {/* <MainHeader category={category} /> */}
      {/* <CategoryHeader /> */}
      {/* {loading || true ? <div className="flex items-center justify-center h-96 w-full"><CircularProgress color="primary" /></div>
      :
      } */}
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

export default MyApp;
