import { FC, useEffect, useState } from "react";
import { useDrag } from "../context/DragContext";
import { post } from "../lib/fetch";
import { playSound } from "../lib/sound";

const Hotbar = ({ items, external }: any) => {
  const [slots, setSlots]: any = useState([]);

  useEffect(() => {
    setSlots([]);
    for (let i = 0; i < 5; i++) {
      setSlots((nSlots: any) => [...nSlots, i]);
    }
  }, []);

  return (
    <div
      className={`grid grid-cols-5 rounded-md mt-2 gap-2 ${
        external ? "bg-black bg-opacity-30 scale-75" : "bg-white bg-opacity-5"
      } p-2`}
    >
      {slots.map((slot: any) =>
        items ? (
          <HotbarItem
            key={"hotbar-" + slot}
            slot={slot}
            item={items[slot]}
            external={external}
          />
        ) : (
          <HotbarItem
            key={"hotbar-" + slot}
            slot={slot}
            item={null}
            external={external}
          />
        )
      )}
    </div>
  );
};

interface IHotbarItem {
  slot: number;
  item: any;
  external: boolean;
}

const HotbarItem: FC<IHotbarItem> = ({ item, slot, external }) => {
  const { drop, drag } = useDrag();

  return (
    <div
      onMouseUp={(e) => {
        e.stopPropagation();
        drop({ inv: "hotbar", slot });
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (item) {
          playSound("remove.wav");
          post("removeItemFromHotbar", { slot });
        }
      }}
      className={`relative w-[7.7rem] opacity-60 h-[10rem] py-2 text-md font-medium flex flex-col text-white items-center justify-between rounded-lg bg-black bg-opacity-10 hover:bg-opacity-20 ${
        item && "opacity-100"
      } ${external && "bg-white"}`}
    >
      <div className="bg-white px-3 text-sm bg-opacity-10 rounded-lg py-1">
        {slot + 1}
      </div>
      {item && (
        <>
          <img
            onMouseDown={(e: any) => {
              if (e.button === 0) drag(e, { ...item, inv: "hotbar", slot });
            }}
            className="mt-1"
            src={`./assets/items/${item.name}.png`}
            width={"70px"}
            style={{
              filter: "drop-shadow(1px 1px 5px rgba(0,0,0,.3))",
            }}
          />
          <div className="whitespace-nowrap max-w-[80%] truncate text-center">
            {item.label}
          </div>
        </>
      )}
    </div>
  );
};

export default Hotbar;
