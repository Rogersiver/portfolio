import Link from "next/link";
import {
  Flex,
  chakra,
  useColorModeValue,
  Button,
  Text,
  Spacer,
  Box,
} from "@chakra-ui/react";
import Model3d from "./model3d";
import { Image } from "@chakra-ui/react";
import Fonts from "./fonts";
import Toggle from "./colorToggle";

const Nav = () => {
  return (
    <chakra.div>
      <Fonts />
      <Flex
        maxWidth={600}
        textAlign="center"
        alignContent="center"
        alignItems="center"
        p={2}
        mx="auto"
        backgroundColor={useColorModeValue("gray.300", "#141214")}
      >
        <Link href="/">
          <a>
            <Image src="/images/logo.png" boxSize={10} />
          </a>
        </Link>
        <Text fontFamily="Fira Code" mx={4}>
          Roger Siver
        </Text>
        <Spacer />
        <Toggle />
      </Flex>
      <Box px={4}></Box>
      <Model3d />
    </chakra.div>
  );
};

export default Nav;
