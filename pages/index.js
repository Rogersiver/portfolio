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
          src="/images/me.jpg"
          boxSize="100px"
          borderRadius="100%"
          float="right"
          m={2}
        />
      </Tooltip>
      <Text fontSize="lg" style={{ "text-indent": "10%" }} mt={2}>
        Hey, I'm a Software Developer & Creative based in the USA. I'm
        passionate about creating/using useful tools, design, and solving
        problems. I am proficient at NodeJS and Typescript, and am a seasoned
        Event Manager with experience in Audio, Video, and Lighting Tech.
        Whether its full-stack software or any live event, I'm your Engineer.
      </Text>
      <Text fontSize="lg" style={{ "text-indent": "10%" }}>
        Check out my links if you want to know more, and check out my CV if
        you're looking for my contact information to reach out!
      </Text>
    </chakra.div>
  </MotionWrapper>
);

export default Index;
