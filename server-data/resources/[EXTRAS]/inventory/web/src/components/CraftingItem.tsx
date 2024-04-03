import { FC, useRef } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useCore } from "../App";

export interface ICraftingItem {
  inv: string;
  type: string;
  name: string;
  label: string;
  desc: string;
  ingredients: any;
  canCraft: boolean;
}

interface Item {
  item: ICraftingItem;
}

const CraftingItem: FC<Item> = ({ item }) => {
  const { setCrafting } = useCore();
  const image: any = useRef();

  return (
    <div
      onClick={() => setCrafting(item)}
      className="relative w-full overflow-hidden col-span-2 p-2 text-md font-medium text-white rounded-lg bg-black bg-opacity-10 hover:bg-opacity-20"
    >
      <div className="relative flex gap-3 items-center w-full">
        <img
          ref={image}
          src={`./assets/items/${item.name}.png`}
          className="block"
          width={"70px"}
          style={{
            filter: "drop-shadow(1px 1px 5px rgba(0,0,0,.3))",
          }}
        />
        <div
          className={`flex justify-between min-w-0 overflow-hidden items-center w-full gap-1`}
        >
          <div className="relative min-w-0">
            <p className="text-xl mb-1">{item.label}</p>
            {item.desc && (
              <p className="overflow-hidden truncate text-sm text-left">
                {item.desc}
              </p>
            )}
          </div>

          {item.canCraft ? (
            <div className="p-2 mr-2 bg-blue-500 h-fit rounded-md">
              <FaCheck />
            </div>
          ) : (
            <div className="p-2 mr-2 bg-red-500 h-fit rounded-md">
              <FaTimes />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CraftingItem;
