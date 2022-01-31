import { motion } from "framer-motion";
import Link from "next/link";
import {
  chakra,
  Text,
  Flex,
  Spacer,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
const Index = () => (
  <motion.div
    animate={{ opacity: [0, 1], y: [-20, 0] }}
    transition={{ duration: 1 }}
  >
    <chakra.div mx="auto" maxWidth={500}>
      <Text fontSize="lg" style={{ "text-indent": "10%" }} m={2}>
        Hey, I'm a Software Developer & Creative based in the USA. I love
        designing, creating useful tools, and solving problems. Always looking
        for new projects and the next tech. Check out my links & art if you want
        to know more. Check out my CV if you're looking to work!
      </Text>
      <Text fontSize="lg" style={{ "text-indent": "10%" }} m={2}>
        I am also an Event Production Manager and AVL Tech. Whether its
        full-stack software or any live event, I'm your Engineer!
      </Text>
      <Flex mx="auto" p={6} my={4}>
        <Link href="/assets/Roger_Siver_CV.pdf">
          <Button colorScheme="yellow">
            <chakra.a color={"black"} target="_blank">
              CV
            </chakra.a>
          </Button>
        </Link>
        <Spacer />
        <Button>GitHub</Button>
        <Spacer />
        <Button colorScheme="linkedin">LinkedIn</Button>
      </Flex>
    </chakra.div>
  </motion.div>
);

export default Index;
