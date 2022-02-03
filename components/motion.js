import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      staggerChildren: 0.1,
    },
  },
};

const MotionWrapper = ({ children }) => {
  return (
    <motion.main
      variants={container} // Pass the variant object into Framer Motion
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.main>
  );
};

export default MotionWrapper;
