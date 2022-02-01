// bio.js
import {
  chakra,
  Text,
  Box,
  Image,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";

const Bio = () => {
  return (
    <chakra.div mx="auto" mb={4} maxWidth={500}>
      <Box
        w="full"
        p={4}
        bg={useColorModeValue("white", "gray.900")}
        rounded="md"
      >
        <Tooltip label="It's Me!" colorScheme="yellow">
          <Image
            src="/images/me.jpg"
            boxSize="100px"
            borderRadius="100%"
            float="right"
            m={2}
            shadow="lg"
          />
        </Tooltip>
        <Text fontSize="md" style={{ "text-indent": "10%" }}>
          Hey! I'm a Software Developer & Creative based in the USA. I'm
          passionate about creating utility & using useful tools, the art of
          design, and spending my time being a problem solver. I am proficient
          at NodeJS and Typescript, and am a seasoned Event Manager with
          experience in Audio, Video, and Lighting Tech. Whether its full-stack
          software or any live event, I'm your Engineer.
        </Text>
        <Text fontSize="md" my={4} style={{ "text-indent": "10%" }}>
          This site was coded with NextJS, ChakraUI, ThreeJS, Framer Motion, and
          Docker. It's hosted on Google Cloud App Service and the 3d model is
          from SketchFab
        </Text>
        <Text fontSize="md" style={{ "text-indent": "10%" }}>
          Check out my links if you want to know more, and check out my CV if
          you're looking for my contact information to reach out!
        </Text>
      </Box>
    </chakra.div>
  );
};

export default Bio;
