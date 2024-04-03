import { FC, useState } from "react";
import { FaClock, FaTimes, FaToolbox } from "react-icons/fa";
import { useCore } from "../App";
import { useDrag } from "../context/DragContext";
import { post } from "../lib/fetch";
import Alert from "./Alert";
import Modal from "./Modal";

export const CompModal = () => {
  const { components, setComponents, locales } = useCore();

  return (
    <Modal isOpen={components ? true : false} close={() => setComponents(null)}>
      <div className="flex flex-col gap-1 font-medium">
        <div className="flex gap-1 mb-1 justify-between items-center">
          <h1 className="text-lg">{components?.label}</h1>
          <button
            onClick={() => setComponents(null)}
            className="bg-white focus:ring focus:bg-opacity-10 outline-none ring-blue-400 w-fit bg-opacity-5 hover:bg-opacity-10 p-3 rounded-md transition-all"
          >
            <FaTimes />
          </button>
        </div>

        <h2>{locales?.componentsHeader}</h2>
        <div className="grid w-full gap-1 mt-1 overflow-auto max-h-[17rem] mb-2">
          {components?.comps.length > 0 ? (
            components?.comps.map((ingredient: IComp, index: number) => (
              <Comp key={"comp" + index} {...ingredient} />
            ))
          ) : (
            <Alert
              animate={false}
              text={locales?.noCompsFound}
              icon={<FaToolbox />}
            />
          )}
        </div>
      </div>
    </Modal>
  );
};

interface IComp {
  name: string;
  label: string;
  count: number;
}

const Comp: FC<IComp> = ({ name, label, count }) => {
  return (
    <div className="bg-white flex justify-between bg-opacity-5 items-center gap-2 rounded-md p-2">
      <h3>{label}</h3>
    </div>
  );
};
