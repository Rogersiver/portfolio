import { ChakraProvider, chakra } from "@chakra-ui/react";
import Layout from "../components/layout";
import theme from "../components/theme";

function MyApp({}) {
  return (
    <ChakraProvider theme={theme}>
      <chakra.div
        height="100%"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Layout />
      </chakra.div>
    </ChakraProvider>
  );
}

export default MyApp;
