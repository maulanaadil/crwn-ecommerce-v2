import { motion } from "framer-motion";
import PropTypes from "prop-types";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}>
      {children}
    </motion.div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node,
};
export default PageTransition;
