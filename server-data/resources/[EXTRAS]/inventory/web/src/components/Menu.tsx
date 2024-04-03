import { FC } from "react";
import { motion } from "framer-motion";
import { FaGift, FaHandPointer, FaInfo } from "react-icons/fa";
import { IItem } from "./Item";
import { post } from "../lib/fetch";
import { useMenu } from "../context/MenuContext";
import { useCore } from "../App";

interface IMenu {
  x: number;
  y: number;
  data?: IItem;
}

const Menu: FC<IMenu> = ({ x, y, data }) => {
  const { setMenu } = useMenu();
  const { setGiveMenu, setComponents, locales } = useCore();

  const useItem = (e: any) => {
    e.stopPropagation();
    post("useItem", {
      item: data?.name,
    });
    setMenu(null);
  };

  const giveItem = async (e: any) => {
    e.stopPropagation();
    const players = await post("getPlayersInArea");
    setGiveMenu({ players, item: data });
    setMenu(null);
  };

  const componentsBtn = async (e: any) => {
    e.stopPropagation();
    const comps = await post("getComponents", {
      name: data?.name,
      comps: data?.comps,
    });
    setComponents({ ...data, comps });
    setMenu(null);
  };

  return (
    <motion.div
      id="menu"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="absolute grid top-0 w-auto max-w-[18rem] bg-zinc-900 gap-1 text-white rounded-lg p-2"
      style={{ top: y, left: x }}
    >
      {data?.desc && <p className="mb-1 font-medium">{data?.desc}</p>}
      {data?.inv === "main" && (
        <div
          className={`grid ${data?.desc ? "grid-cols-2" : "grid-cols-1"} gap-1`}
        >
          {data?.canUse && (
            <motion.button
              whileTap={{ scale: 0.9 }}
              disabled={!data?.canUse}
              onClick={useItem}
              className={`w-full ${
                !data?.canRemove && "col-span-full"
              } disabled:opacity-50 disabled:pointer-events-none px-3 py-2 flex items-center justify-center gap-2 bg-white bg-opacity-10 hover:bg-green-500 hover:bg-opacity-80  font-medium rounded-lg`}
            >
              <FaHandPointer /> {locales?.useBtn}
            </motion.button>
          )}

          {data?.canRemove && (
            <motion.button
              whileTap={{ scale: 0.9 }}
              disabled={!data?.canRemove}
              onClick={giveItem}
              className={`w-full ${
                !data?.canUse && "col-span-full"
              } disabled:opacity-50 disabled:pointer-events-none px-3 py-2 flex items-center justify-center gap-2 bg-white bg-opacity-10 hover:bg-blue-400 hover:bg-opacity-80 font-medium rounded-lg`}
            >
              <FaGift /> {locales?.giveBtn}
            </motion.button>
          )}
        </div>
      )}
      {data?.comps && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={componentsBtn}
          disabled={!data.comps ? true : false}
          className="w-full disabled:opacity-50 disabled:pointer-events-none px-3 py-2 flex items-center justify-center gap-2 bg-white bg-opacity-10 hover:bg-blue-400 hover:bg-opacity-80 font-medium rounded-lg"
        >
          <FaInfo /> {locales?.infoBtn}
        </motion.button>
      )}
    </motion.div>
  );
};

export default Menu;
