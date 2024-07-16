import { motion } from "framer-motion";

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

const Main: React.FC<MainProps> = ({ children, className }) => {
  return (
    <motion.main
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {children}
    </motion.main>
  );
};
export default Main;
