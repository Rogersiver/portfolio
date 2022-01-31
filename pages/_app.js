import { AnimatePresence } from "framer-motion";
import Layout from "../components/layout";
import theme from "../components/theme";
import LinkButtons from "../components/linkButtons";
import { ChakraProvider, chakra, Text } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <chakra.div
        height="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Layout />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={Component} />
        </AnimatePresence>
        <LinkButtons />
        <Text
          // position="absolute"
          opacity="50%"
          bottom="0"
          width="100%"
          textAlign="center"
          mx="auto"
          px={6}
        >
          &copy; Roger Siver 2022
        </Text>
      </chakra.div>
    </ChakraProvider>
  );
}

export default MyApp;
