import Card from "../components/card";
import LinkButtons from "../components/linkButtons";
import { chakra, Center } from "@chakra-ui/react";
import projs from "./projects.json";
import MotionWrapper from "../components/motion";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <chakra.div mb={4}>
      <MotionWrapper>
        {projs.map((proj, i) => {
          return (
            <Card
              key={i}
              lang={proj.lang}
              techs={proj.techs}
              name={proj.name}
              link={proj.link}
              desc={proj.desc}
              img={proj.img}
              short={proj.short}
            />
          );
        })}
      </MotionWrapper>
      <Center>
        <LinkButtons />
      </Center>
    </chakra.div>
  );
};

export default Projects;
