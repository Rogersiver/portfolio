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
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Fonts />
      <Nav />
      <main>{children}</main>
      <Text
        position="fixed"
        bottom="0"
        width="100%"
        textAlign="center"
        mx="auto"
        px={6}
        pt={10}
        pb={6}
      >
        &copy; Roger Siver 2022
      </Text>
    </>
  );
}

export default Layout;
