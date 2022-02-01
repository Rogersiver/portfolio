import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Link,
  Center,
} from "@chakra-ui/react";

const Card = ({ lang, techs, name, link, desc }) => {
  return (
    <chakra.div mx="auto" maxWidth={500}>
      <Flex p={4} w="full" alignItems="center" justifyContent="center">
        <Box
          w="full"
          maxW="md"
          mx="auto"
          px={4}
          py={3}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow="sm"
          rounded="md"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <chakra.span
              fontSize="sm"
              color={useColorModeValue("gray.800", "gray.400")}
            >
              {lang}
            </chakra.span>
            <chakra.span
              bg={useColorModeValue("brand.200", "brand.300")}
              color={useColorModeValue("brand.800", "brand.900")}
              p={2}
              rounded="full"
              textTransform="uppercase"
              fontSize="xs"
            >
              {techs}
            </chakra.span>
          </Flex>

          <Box>
            <chakra.h1
              fontSize="xl"
              fontWeight="bold"
              mt={2}
              color={useColorModeValue("gray.800", "white")}
            >
              {name}
            </chakra.h1>
            <chakra.p
              fontSize="md"
              mt={2}
              color={useColorModeValue("gray.600", "gray.300")}
            >
              {desc}
            </chakra.p>
          </Box>
          <Box>
            <Center mt={4}>
              <Link
                mx={2}
                cursor="pointer"
                textDecor="underline"
                color={useColorModeValue("brand.600", "brand.400")}
              >
                {link}
              </Link>
            </Center>
            <Flex alignItems="center" justifyContent="center" mt={4}></Flex>
          </Box>
        </Box>
      </Flex>
    </chakra.div>
  );
};

export default Card;
