import { motion } from "framer-motion";
import Link from "next/link";
import { chakra, Text, Flex, Spacer, Button } from "@chakra-ui/react";
const About = () => (
  <motion.div
    animate={{ opacity: [0, 1], y: [-20, 0] }}
    transition={{ duration: 2 }}
  >
    <chakra.div mx="auto" maxWidth={500}>
      <Text style={{ "text-indent": "10%" }} m={2}>
        ass cheese
      </Text>
      <Flex mx="auto" p={6} my={4}>
        <Button>GitHub</Button>
        <Spacer />
        <Button colorScheme="linkedin">LinkedIn</Button>
        <Spacer />
        <Button colorScheme="yellow">
          <Link href="/assets/Roger_Siver_CV.pdf">
            <a target="_blank">CV</a>
          </Link>
        </Button>
      </Flex>
    </chakra.div>
  </motion.div>
);

export default About;
