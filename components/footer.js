import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import MotionWrapper from "./motion";
const Footer = () => {
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.25,
      },
    },
  };

  return (
    <MotionWrapper>
      <motion.div variants={item}>
        <Text
          cursor="default"
          opacity="50%"
          bottom="0"
          width="100%"
          textAlign="center"
          mx="auto"
          px={6}
        >
          &copy; Roger Siver 2022
        </Text>
      </motion.div>
    </MotionWrapper>
  );
};

export default Footer;
