import MotionWrapper from "../components/motion";
import Link from "next/link";
import {
  chakra,
  Text,
  Flex,
  Spacer,
  Button,
  Image,
  Tooltip,
} from "@chakra-ui/react";
const Index = () => (
  <MotionWrapper>
    <chakra.div mx="auto" maxWidth={500}>
      <Tooltip label="It's Me!" colorScheme="yellow">
        <Image
          src="/assets/me.jpg"
          boxSize="100px"
          borderRadius="100%"
          float="right"
          m={2}
        />
      </Tooltip>
      <Text fontSize="lg" style={{ "text-indent": "10%" }} m={2}>
        Hey, I'm a Software Developer & Creative based in the USA. I love
        designing, creating useful tools, and solving problems. I am also an
        Event Production Manager and Audio, Video, and Lighting Tech. Whether
        its full-stack software or any live event, I'm your Engineer.
      </Text>
      <Text fontSize="lg" style={{ "text-indent": "10%" }} m={2}>
        Check out my links & art if you want to know more, and check out my CV
        if you're looking to work!
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
  </MotionWrapper>
);

export default Index;
