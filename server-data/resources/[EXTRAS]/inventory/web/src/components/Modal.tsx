import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface IModal {
  isOpen: boolean;
  close: any;
}

const Modal: FC<IModal> = ({ isOpen, close, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={close}
          className="w-screen h-screen bg-black bg-opacity-40 absolute z-20 flex items-center justify-center left-0 top-0"
        >
          <motion.div
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            exit={{ y: 30, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="p-3 bg-zinc-800 relative text-white rounded-md w-[30rem]"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
