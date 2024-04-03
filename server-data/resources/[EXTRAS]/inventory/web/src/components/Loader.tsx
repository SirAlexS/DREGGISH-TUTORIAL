import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      style={{ backgroundImage: "url(./assets/loader.svg)" }}
      className="w-[8rem] h-[5rem] mx-auto bg-no-repeat bg-contain bg-center col-span-full"
    />
  );
};

export default Loader;
