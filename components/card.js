import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Link,
  // Image,
  Spacer,
  Text,
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import Image from 'next/image';

import { motion } from "framer-motion";

const PicModal = ({ isOpen, onClose, props }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={useColorModeValue("gray.50", "gray.900")}>
        <ModalHeader>
          <Text>{props.name}</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody p={4}>
        <Image
              cursor="pointer"
              position="relative"
              width={700}
              height={400}
              objectFit="fill"
              src={props.img}
              alt="Article"
            />
          <chakra.p mb={2}>{props.desc}</chakra.p>
          <hr></hr>
          <Flex>
            <Link textAlign="center" isExternal src={props.link}>
              <a>{props.short}</a>
            </Link>
            <Spacer />
            <Text fontSize="xs">{props.techs}</Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const Card = (props) => {
  const { lang, techs, name, link, desc, img } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={item} exit={{ opacity: 0 }} whileTap={{scale: 0.9, transition: 0.5}}>
      <chakra.div mx="auto" maxWidth={500} minWidth={300}>
        <Flex w="full" alignItems="center" justifyContent="center">
          <Box
            my={2}
            maxW="md"
            mx="auto"
            bg={useColorModeValue("white", "gray.900")}
          >
            <PicModal isOpen={isOpen} onClose={onClose} props={props} />
            <chakra.div cursor="pointer" overflow="hidden" roundedTop="2xl">
            <Image
              cursor="pointer"
              position="relative"
              onClick={onOpen}
              width={600}
              height={200}
              objectFit="cover"
              src={img}
              priority={true}
              alt="Article"
            />
            </chakra.div>
            <Flex justifyContent="space-between" alignItems="center" p={2}>
              <chakra.span
                fontSize="sm"
                color={useColorModeValue("gray.800", "gray.400")}
              >
                {lang}
              </chakra.span>
              <chakra.span
                bg={useColorModeValue("brand.200", "brand.300")}
                color={useColorModeValue("brand.800", "brand.900")}
                rounded="full"
                textTransform="uppercase"
                fontSize="xs"
              >
                {techs}
              </chakra.span>
            </Flex>

            <Box p={4}>
              <chakra.h1
                fontSize="xl"
                fontWeight="bold"
                mt={2}
                color={useColorModeValue("gray.800", "white")}
              >
                <Link href={link} target="_blank">
                  {name}
                </Link>
              </chakra.h1>
              <chakra.p
                fontSize="md"
                mt={2}
                color={useColorModeValue("gray.600", "gray.300")}
              >
                {desc}
              </chakra.p>
            </Box>
          </Box>
        </Flex>
      </chakra.div>
    </motion.div>
  );
};

export default Card;
