import { Center, Button, ButtonGroup, Spacer } from "@chakra-ui/react";

import Link from "next/link";

const LinkButtons = () => {
  return (
    <Center my={4}>
      <ButtonGroup variant="outline" spacing="6">
        <a
          target="_blank"
          href="https://github.com/Rogersiver"
          rel="noreferrer"
        >
          <Button colorScheme="green">GitHub</Button>
        </a>
        <Link href="/assets/Roger_Siver_CV.pdf">
          <a target="_blank">
            <Button colorScheme="green" mx={2}>
              Resume
            </Button>
          </a>
        </Link>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/roger-siver-652927138/"
          rel="noreferrer"
        >
          <Button colorScheme="green">LinkedIn</Button>
        </a>
      </ButtonGroup>
    </Center>
  );
};

export default LinkButtons;
