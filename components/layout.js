// components/layout.js

import Nav from "./nav";
import Head from "next/head";
import Fonts from "./fonts";
import { Text } from "@chakra-ui/react";
function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="preload" as="image" href="/images/me.jpg"/>
        <link rel="preload" as="image" href="/images/logo.jpg"/>
        <link rel="preload" as="image" href="/images/simplecounter.gif"/>
        <link rel="preload" as="image" href="/images/wavepool.gif"/>
        <link rel="preload" as="image" href="/images/liquiddeath.jpg"/>
        <link rel="manifest" href="/images/site.webmanifest" />
        <title>Roger Siver</title>
      </Head>
      <Fonts />
      <Nav />
      <main>{children}</main>
    </>
  );
}

export default Layout;
