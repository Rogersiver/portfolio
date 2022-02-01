import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 200, y: 0 },
};

const MotionWrapper = ({ children }) => {
  return (
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
      className=""
    >
      {children}
    </motion.main>
  );
};

export default MotionWrapper;
