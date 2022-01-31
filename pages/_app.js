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
            <a target="_blank">
              <Button colorScheme="green">CV</Button>
            </a>
          </Link>
          <Spacer />
          <a href="https://github.com/Rogersiver">
            <Button colorScheme="green">GitHub</Button>
          </a>
          <Spacer />
          <a href="https://www.linkedin.com/in/roger-siver-652927138/">
            <Button colorScheme="green">LinkedIn</Button>
          </a>
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
