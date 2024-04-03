import { FC, useEffect, useRef } from "react";
import Hotbar from "./Hotbar";
import Item from "./Item";
import { useDrag } from "../context/DragContext";
import Loader from "./Loader";
import { motion } from "framer-motion";
import Alert from "./Alert";
import { useCore } from "../App";
import { FaTimes } from "react-icons/fa";
import ShopItem from "./ShopItem";
import CraftingItem from "./CraftingItem";

export interface IInventory {
  type: string;
  title?: string;
  items?: Array<any> | null;
  hotbar?: any;
  weight?: any;
}

const Inventory: FC<IInventory> = ({ title, type, items, weight, hotbar }) => {
  const { drop, setValue, inputValue } = useDrag();
  const { giveMenu, locales, config } = useCore();
  const input: any = useRef();

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  useEffect(() => {
    let val = inputValue;
    const wheelInput = (e: any) => {
      if (giveMenu) return;
      if (!input.current) return;

      if (!input.current.contains(e.target)) {
        return;
      }

      const y = e.deltaY;

      if (y < 1) {
        var newVal = val + 1;
        if (newVal <= 100) {
          val = newVal;
        }
      } else {
        var newVal = val - 1;
        if (newVal > 0) {
          val = newVal;
        }
      }

      setValue(val);
      input.current.value = val;
    };

    document.addEventListener("wheel", wheelInput);
    return () => {
      document.removeEventListener("wheel", wheelInput);
    };
  }, [input, inputValue, giveMenu]);

  return (
    <motion.div className="flex flex-col w-[42rem] h-[50rem]" id="inventory">
      <p
        className={`text-white flex items-center justify-between text-2xl ${
          weight ? "mb-2" : "mb-1"
        }`}
      >
        {title ? title : "Your Inventory"}
      </p>

      <div className="flex shrink-0 mb-2 gap-2">
        {weight && (
          <>
            <div className="h-[2rem] gap-[2px] items-center flex font-medium min-w-max px-2 text-white rounded-md p-1 bg-white bg-opacity-5">
              {weight.current | 0} / {weight.max | 0}
              {config?.weightUnits && (
                <p className="font-light">{config?.weightUnits}</p>
              )}
            </div>
            <div className="w-full h-[2rem] rounded-md p-1 bg-white bg-opacity-5">
              <div
                className="h-full rounded-[4px] transition-all"
                style={{
                  width:
                    weight && items
                      ? (weight.current / weight.max) * 100 + "%"
                      : "0%",
                  minWidth: weight && weight.current > 0 ? "1%" : "0%",
                  maxWidth: "100%",
                  background:
                    "linear-gradient(to right, #3EB839, #FE4141 500px)",
                }}
              />
            </div>
          </>
        )}
        {type === "main" && (
          <>
            <input
              ref={input}
              defaultValue={inputValue}
              onChange={handleInputChange}
              type={"number"}
              min={1}
              pattern="[1,100]"
              className="h-full focus:ring hover:bg-opacity-10 ring-blue-400 transition-all outline-none w-[20%] px-2 rounded-md bg-white bg-opacity-5 focus:bg-opacity-10 text-center text-white leading-5 text-lg"
            />
          </>
        )}
      </div>

      <div
        onMouseUp={(e) => {
          e.stopPropagation();
          drop({ inv: type });
        }}
        className={`grid ${
          type === "shop"
            ? "grid-cols-4"
            : type === "crafting"
            ? "grid-cols-4"
            : "grid-cols-5"
        } gap-2 p-2 bg-white overflow-auto content-start place-items-center bg-opacity-5 w-full h-full rounded-md relative`}
      >
        {items ? (
          items.length > 0 ? (
            items.map((item, index) => {
              if (type === "shop") {
                return (
                  <ShopItem
                    key={type + item.name + index}
                    item={{ ...item, inv: type }}
                  />
                );
              } else if (type === "crafting") {
                return (
                  <CraftingItem
                    key={type + item.name + index}
                    item={{ ...item, inv: type }}
                  />
                );
              } else {
                return (
                  <Item
                    key={type + item.name + index}
                    item={{ ...item, inv: type, index }}
                  />
                );
              }
            })
          ) : (
            <Alert
              animate={true}
              text={locales?.noItemsFound}
              icon={<FaTimes />}
            />
          )
        ) : (
          <Loader />
        )}
      </div>

      {type === "main" && hotbar && <Hotbar items={hotbar} />}
    </motion.div>
  );
};

export default Inventory;
