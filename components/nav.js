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
      <chakra.div
        backgroundColor={useColorModeValue("gray.200", "#141214")}
        mx="auto"
      >
        <Flex
          maxWidth={600}
          textAlign="center"
          alignContent="center"
          alignItems="center"
          p={2}
          mx="auto"
        >
          <Link href="/">
            <a>
              <Image src="/images/logo.png" boxSize={10} />
            </a>
          </Link>
          <Text fontFamily="Fira Code" mx={4} fontSize="2xl">
            Roger Siver
          </Text>
          <Spacer />
          <Link href="/projects">
            <Button mr={2}>
              <a>Projects</a>
            </Button>
          </Link>
          <Toggle />
        </Flex>
      </chakra.div>
      <Box p={4}>
        <Model3d />
      </Box>
    </chakra.div>
  );
};

export default Nav;
