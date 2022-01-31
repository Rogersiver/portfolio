import Card from "../components/card";
import { chakra } from "@chakra-ui/react";
import projs from "./projects.json";
import MotionWrapper from "../components/motion";
const list = projs.map((proj, i) => {
  return (
    <MotionWrapper key={i}>
      <Card
        lang={proj.lang}
        techs={proj.techs}
        name={proj.name}
        link={proj.link}
        desc={proj.desc}
      />
    </MotionWrapper>
  );
});

const Projects = () => <chakra.div mb={4}>{list}</chakra.div>;

export default Projects;
