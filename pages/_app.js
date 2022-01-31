import {
  ChakraProvider,
  chakra,
  Text,
  Flex,
  Button,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/layout";
import theme from "../components/theme";

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
        <Flex mx="auto" maxWidth={500} p={6} my={4}>
          <Link href="/assets/Roger_Siver_CV.pdf">
            <Button colorScheme="yellow">
              <chakra.a color={"black"} target="_blank">
                CV
              </chakra.a>
            </Button>
          </Link>
          <Spacer />
          <Button>GitHub</Button>
          <Spacer />
          <Button colorScheme="linkedin">LinkedIn</Button>
        </Flex>
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
