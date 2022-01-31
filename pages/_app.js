import { ChakraProvider, chakra } from "@chakra-ui/react";
import Layout from "../components/layout";
import theme from "../components/theme";

function MyApp({ Component }) {
  return (
    <ChakraProvider theme={theme}>
      <chakra.div
        height="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Layout />
        <Component />
      </chakra.div>
    </ChakraProvider>
  );
}

export default MyApp;
