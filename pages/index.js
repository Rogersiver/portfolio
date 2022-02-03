import MotionWrapper from "../components/motion";
import Bio from "../components/bio";
import LinkButtons from "../components/linkButtons";
import { motion } from "framer-motion";
const Index = () => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <MotionWrapper>
      <motion.div variants={item} exit={{ opacity: 0 }}>
        <LinkButtons />
      </motion.div>
      <motion.div variants={item} exit={{ opacity: 0 }}>
        <Bio />
      </motion.div>
    </MotionWrapper>
  );
};

export default Index;
