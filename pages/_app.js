import "@material-tailwind/react/tailwind.css";
import "../styles/globals.css";

// aws configuration
import Amplify from 'aws-amplify';
import awsmobile from '../aws-exports';

Amplify.configure({
  ...awsmobile, ssr: true
});

import Header from "../components/Layout/Header";
import Head from "next/head";
import useAuthenticatedUser from "../hooks/authenticatedUser";
import CategoryHeader from "../components/Layout/CategoryHeader";
import MainHeader from "../components/Layout/MainHeader";
function MyApp({ Component, pageProps }) {
  const user = useAuthenticatedUser() || true
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
      </Head>
      {user && <Header />} 
      <MainHeader />
      {/* <CategoryHeader /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
