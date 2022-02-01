import Card from "../components/card";
import LinkButtons from "../components/linkButtons";
import { chakra, Center } from "@chakra-ui/react";
import projs from "./projects.json";
import MotionWrapper from "../components/motion";
const list = projs.map((proj, i) => {
  return (
    <Card
      lang={proj.lang}
      techs={proj.techs}
      name={proj.name}
      link={proj.link}
      desc={proj.desc}
      img={proj.img}
      short={proj.short}
    />
  );
});

const Projects = () => (
  <MotionWrapper>
    <chakra.div mb={4}>
      {list}
      <Center>
        <LinkButtons />
      </Center>
    </chakra.div>
  </MotionWrapper>
);

export default Projects;
