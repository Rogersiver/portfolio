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
import { Image } from "@chakra-ui/react";
import Fonts from "./fonts";
import Toggle from "./colorToggle";

const Nav = () => {
  return (
    <chakra.div>
      <Fonts />
      <Flex
        textAlign="center"
        alignContent="center"
        alignItems="center"
        m={2}
        p={2}
        borderRadius={10}
        backgroundColor={useColorModeValue("green.400", "green.600")}
      >
        <Link href="/">
          <a>
            <Image src="/images/logo.png" boxSize={10} />
          </a>
        </Link>
        <Text fontFamily="Fira Code" mx={4}>
          Roger Siver 🖱️🧑🏼‍💻
        </Text>
        <Link href="/assets/Roger_Siver_CV.pdf">
          <a target="_blank">cv</a>
        </Link>
        <Spacer />
        <Toggle />
      </Flex>
      <Box px={4}>
        <Text fontSize="s">
          Hey! I'm a Full-Stack Software Engineer and 3d designer based in New
          Orleans Louisiana.{" "}
        </Text>
      </Box>
    </chakra.div>
  );
};

export default Nav;
