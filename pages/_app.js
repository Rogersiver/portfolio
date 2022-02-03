import Footer from "../components/footer";
import Layout from "../components/layout";
import { AnimatePresence } from "framer-motion";
import theme from "../components/theme";
import { ChakraProvider, chakra } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <chakra.div
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "24px",
          },
        }}
      >
        <Layout />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={Component} />
          <Footer />
        </AnimatePresence>
      </chakra.div>
    </ChakraProvider>
  );
}

export default MyApp;
