// bio.js
import {
  chakra,
  Text,
  Box,
  Image,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
const Bio = () => {
  return (
    <chakra.div mx="auto" mb={4} maxWidth={500}>
      <Box
        w="full"
        p={4}
        bg={useColorModeValue("white", "gray.900")}
        rounded="md"
      >
        <Tooltip
          label="It's Me!"
          placement="top-end"
          bg="gray.800"
          color="yellow.200"
          hasArrow
        >
          <motion.div
            whileHover={{
              scale: 1.01,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src="/images/me.jpg"
              boxSize="100px"
              borderRadius="100%"
              float="right"
              m={2}
              shadow="lg"
            />
          </motion.div>
        </Tooltip>
        <Text fontSize="md" style={{ "text-indent": "10%" }}>
          Hey! I'm a Software Developer & Creative based in the USA. I'm
          passionate about creating utility & using powerful tools, design, and
          spending my time being a problem solver. I am proficient at NodeJS and
          Typescript, and am an event manager with experience in audio, video,
          and lighting technologies. Whether its full-stack software or any live
          event, I'm your Engineer.
        </Text>
        <Text fontSize="md" my={4} style={{ "text-indent": "10%" }}>
          This site was coded with NextJS, ChakraUI, ThreeJS, Framer Motion, and
          Docker. It's hosted on Google Cloud Run, and the 3d models are from
          SketchFab
        </Text>
        <Text fontSize="md" style={{ "text-indent": "10%" }}>
          Check out my links if you want to know more, and check out my resume
          if you're looking for my contact information to reach out!
        </Text>
      </Box>
    </chakra.div>
  );
};

export default Bio;
