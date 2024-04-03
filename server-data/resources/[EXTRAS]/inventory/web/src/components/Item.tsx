import { FC, useRef } from "react";
import { useDrag } from "../context/DragContext";
import { useMenu } from "../context/MenuContext";
import { post } from "../lib/fetch";
import { useCore } from "../App";
import { playSound } from "../lib/sound";

export interface IItem {
  inv: string;
  index: number;
  type: string;
  name: string;
  label: string;
  desc: string;
  count: number;
  weight: number;
  comps?: any;
  canRemove: boolean;
  canUse: boolean;
}

interface Item {
  item: IItem;
}

const Item: FC<Item> = ({ item }) => {
  const { setMenu } = useMenu();
  const { drag, locked, lockInv } = useDrag();
  const { secondInv, locales } = useCore();
  const image: any = useRef();

  const handleClick = (e: any) => {
    if (e.shiftKey && secondInv?.items) {
      if (!locked) {
        if (item.inv !== "main") {
          post("addItemToPlayer", { item, count: item.count });
        } else {
          post("addItemToInventory", { item, count: item.count });
        }
        lockInv();
        playSound("drop.wav");
      }
    }
  };

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();

        if (item.type === "item_weapon") {
          if (!item.comps) {
            return;
          }
        } else {
          if (!item.desc && item.inv !== "main") {
            return;
          }
        }

        playSound("click.wav", 0.3);

        setMenu({
          x: e.pageX,
          y: e.pageY,
          data: { ...item },
        });
      }}
      onClick={handleClick}
      onMouseDown={(e: any) => {
        if (e.button === 0 && !e.shiftKey) {
          drag(
            { clientX: e.clientX, clientY: e.clientY, target: image.current },
            { ...item }
          );
        } else if (e.button === 1) {
          e.preventDefault();
          if (item.inv === "main" && item.canUse) {
            post("useItem", { item: item?.name });
          }
        }
      }}
      className="relative w-[7.7rem] overflow-hidden h-[10rem] py-2 text-md font-medium flex flex-col text-white items-center justify-between rounded-lg bg-black bg-opacity-10 hover:bg-opacity-20"
    >
      <div className="text-lg whitespace-nowrap max-w-[85%] truncate text-center">
        {item.type == "item_account" ? (
          <>
            <span className="text-green-500 mr-1">{locales?.currency}</span>
            {item.count?.toLocaleString()}
          </>
        ) : (
          item.count?.toLocaleString()
        )}
      </div>
      <img
        ref={image}
        src={`./assets/items/${item.name}.png`}
        width={"70px"}
        style={{
          filter: "drop-shadow(1px 1px 5px rgba(0,0,0,.3))",
        }}
      />
      <div className="whitespace-nowrap max-w-[80%] truncate text-center">
        {item.label}
      </div>
    </div>
  );
};

export default Item;
