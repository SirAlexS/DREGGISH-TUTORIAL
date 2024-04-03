import { FC, useRef } from "react";
import { useCore } from "../App";
import { useDrag } from "../context/DragContext";

export interface IShopItem {
  inv: string;
  type: string;
  name: string;
  label: string;
  desc: string;
  method: string;
  price: number;
  sellPrice: number;
  ammo: number;
}

interface Item {
  item: IShopItem;
}

const ShopItem: FC<Item> = ({ item }) => {
  const { drag } = useDrag();
  const { locales } = useCore();
  const image: any = useRef();

  return (
    <div
      onMouseDown={(e) => {
        if (e.button === 0) {
          drag(
            { clientX: e.clientX, clientY: e.clientY, target: image.current },
            { ...item }
          );
        }
      }}
      className="relative w-full col-span-2 p-2 text-md font-medium text-white rounded-lg bg-black bg-opacity-10 hover:bg-opacity-20"
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

          <div className="relative flex gap-1">
            {item.price && (
              <div className="px-2 bg-[#3EB839] h-fit rounded-md">
                {locales?.currency}
                {item.price}
              </div>
            )}
            {item.sellPrice && (
              <div className="px-2 bg-[#FE4141] h-fit rounded-md">
                {locales?.currency}
                {item.sellPrice}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
