import Card from "../components/card";
import { chakra } from "@chakra-ui/react";

const projs = [
  {
    lang: "typescript",
    techs: "NodeJS + GraphQL",
    name: "Wavepool",
    link: "github.com",
    desc: "A spotify companion & a powerful utility for sharing songs through spotify with your friends",
  },
  {
    lang: "Javascript",
    techs: "MERN",
    name: "Simple Counter",
    link: "simplecounter.rocks",
    desc: "simple workout counter with API connection for exercise tutorials and a congratulations when your goal is reached",
  },
];

const list = projs.map((proj, i) => {
  return (
    <Card
      key={i}
      lang={proj.lang}
      techs={proj.techs}
      name={proj.name}
      link={proj.link}
      desc={proj.desc}
    />
  );
});

const Projects = () => <chakra.div mb={4}>{list}</chakra.div>;

export default Projects;
