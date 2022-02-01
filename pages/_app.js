import Footer from "../components/footer";
import Layout from "../components/layout";
import { AnimatePresence } from "framer-motion";
import theme from "../components/theme";
import { ChakraProvider, chakra } from "@chakra-ui/react";

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
        <Footer />
      </chakra.div>
    </ChakraProvider>
  );
}

export default MyApp;
