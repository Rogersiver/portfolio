import { Flex, Button, Spacer } from "@chakra-ui/react";

import Link from "next/link";

const LinkButtons = () => {
  return (
    <Flex mx="auto" maxWidth={500} p={6} my={4}>
      <Link href="/assets/Roger_Siver_CV.pdf">
        <a target="_blank">
          <Button colorScheme="green">CV</Button>
        </a>
      </Link>
      <Spacer />
      <a href="https://github.com/Rogersiver">
        <Button colorScheme="green">GitHub</Button>
      </a>
      <Spacer />
      <a href="https://www.linkedin.com/in/roger-siver-652927138/">
        <Button colorScheme="green">LinkedIn</Button>
      </a>
    </Flex>
  );
};

export default LinkButtons;
