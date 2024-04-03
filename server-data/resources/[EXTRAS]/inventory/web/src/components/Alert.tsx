import { motion } from "framer-motion";
import { FC } from "react";
import { FaTimes } from "react-icons/fa";

interface IAlert {
  animate: boolean;
  text: string;
  icon: any;
}

const Alert: FC<IAlert> = ({ animate, text, icon }) => {
  return (
    <motion.div
      initial={{ y: animate ? -50 : 0 }}
      animate={{ y: 0 }}
      className="text-white flex bg-blue-500 items-center gap-3 bg-opacity-50 rounded-md text-lg font-medium w-full col-span-full p-2"
    >
      <div className="rounded-full p-2 bg-white bg-opacity-20">{icon}</div>
      {text}
    </motion.div>
  );
};

export default Alert;
