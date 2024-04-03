import { FC } from "react";
import { FaCheck, FaInfo, FaTimes } from "react-icons/fa";

interface INotify {
  msg: string;
  type: any;
}

const Notify: FC<INotify> = ({ msg, type }) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        className={`rounded-full bg-opacity-80 p-2 text-white ${
          type === "error"
            ? "bg-red-500"
            : type === "success"
            ? "bg-green-400"
            : type === "info" && "bg-blue-400"
        }`}
      >
        {type === "error" && <FaTimes />}
        {type === "success" && <FaCheck />}
        {type === "info" && <FaInfo />}
      </div>
      {msg}
    </div>
  );
};

export default Notify;
