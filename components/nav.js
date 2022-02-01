import Link from "next/link";
import {
  Flex,
  chakra,
  useColorModeValue,
  Button,
  Text,
  Image,
  Spacer,
  Box,
} from "@chakra-ui/react";
import Model3d from "./model3d";
import Fonts from "./fonts";
import Toggle from "./colorToggle";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <chakra.div>
      <Fonts />
      <chakra.div backgroundColor={useColorModeValue("white", "#141214")}>
        <Flex
          maxWidth={600}
          textAlign="center"
          alignContent="center"
          alignItems="center"
          p={2}
          mx="auto"
        >
          <Link href="/">
            <Image
              cursor="pointer"
              src={useColorModeValue(
                "/images/logo-light.svg",
                "/images/logo-dark.svg"
              )}
              boxSize="30px"
            />
          </Link>
          <Link href="/">
            {router.pathname === "/" ? (
              <Text
                cursor="pointer"
                fontFamily="Fira Code"
                mx={4}
                color={useColorModeValue("green.700", "green.200")}
                fontSize={["sm", "sm", "lg"]}
              >
                Roger Siver
              </Text>
            ) : (
              <Text
                cursor="pointer"
                fontFamily="Fira Code"
                mx={4}
                fontSize={["sm", "sm", "lg"]}
              >
                Roger Siver
              </Text>
            )}
          </Link>
          <Spacer />
          <Link href="/projects">
            {router.pathname === "/projects" ? (
              <Button mr={2} size="sm" variant="outline" colorScheme="green">
                Projects
              </Button>
            ) : (
              <Button mr={2} variant="outline" size="sm">
                Projects
              </Button>
            )}
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
