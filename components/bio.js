// bio.js
import {
  chakra,
  Text,
  Box,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';

import Image from 'next/image';
import { motion } from 'framer-motion';
const Bio = () => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div variants={item} exit={{ opacity: 0 }}>
      <chakra.div mx='auto' mb={4} maxWidth={500}>
        <Box
          w='full'
          p={4}
          bg={useColorModeValue('white', 'gray.900')}
          rounded='md'
        >
          <Tooltip
            label="It's Me!"
            placement='top-end'
            bg='gray.800'
            color='yellow.200'
            hasArrow
          >
            <chakra.div
              float='right'
              w={100}
              h={100}
              overflow='hidden'
              borderRadius='100%'
              shadow="lg"
            >
              <Image
                alt='me!'
                src='/images/me.jpg'
                width={100}
                height={100}
                priority={true}
              />
            </chakra.div>
          </Tooltip>
          <Text fontSize='md' style={{ 'textIndent': '10%' }}>
            Hey! I'm a Software Developer & Creative based in the USA. I'm
            passionate about creating utility & using powerful tools, design,
            and spending my time being a problem solver. I am proficient at
            NodeJS and Typescript, and am an event manager with experience in
            audio, video, and lighting technologies. Whether its full-stack
            software or any live event, I'm your Engineer.
          </Text>
          <Text fontSize='md' my={4} style={{ 'textIndent': '10%' }}>
            This site was coded with NextJS, ChakraUI, ThreeJS, Framer Motion,
            and Docker. It's hosted on Google Cloud Run, and the 3d models are
            from SketchFab
          </Text>
          <Text fontSize='md' style={{ 'textIndent': '10%' }}>
            Check out my links if you want to know more, and check out my resume
            if you're looking for my contact information to reach out!
          </Text>
        </Box>
      </chakra.div>
    </motion.div>
  );
};

export default Bio;
