import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Link,
  Image,
  Spacer,
  Text,
  Center,
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const PicModal = ({ isOpen, onClose, props }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text>{props.name}</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody p={4}>
          <Image w="full" src={props.img} alt="Article" mb={4} />
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
  const { lang, techs, name, link, desc, img, key, short } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <chakra.div mx="auto" maxWidth={500} minWidth={300} key={key}>
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          w="full"
          my={2}
          maxW="md"
          mx="auto"
          bg={useColorModeValue("white", "gray.900")}
        >
          <PicModal isOpen={isOpen} onClose={onClose} props={props} />
          <Image
            cursor="pointer"
            onClick={onOpen}
            w="full"
            h={32}
            fit="cover"
            src={img}
            alt="Article"
          />
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

          <Box p={4} cursor="pointer" onClick={onOpen}>
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
        </Box>
      </Flex>
    </chakra.div>
  );
};

export default Card;
