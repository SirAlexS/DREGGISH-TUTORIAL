import { FC, useState } from "react";
import { FaClock, FaTimes, FaToolbox } from "react-icons/fa";
import { useCore } from "../App";
import { useDrag } from "../context/DragContext";
import { post } from "../lib/fetch";
import Alert from "./Alert";
import Modal from "./Modal";

export const CraftingModal = () => {
  const [progress, setProgress]: any = useState(false);
  const { crafting, setCrafting, locales } = useCore();
  const { inputValue } = useDrag();

  const craft = () => {
    if (crafting?.time > 0) {
      let bar = 0;
      let time = crafting?.time * inputValue;
      if (crafting?.type !== "item_standard") {
        time = crafting?.time;
      }

      setCrafting((crafting: any) => ({ ...crafting, crafting: true }));

      let id = setInterval(function () {
        bar++;
        setProgress(bar);
        if (bar >= 100) {
          post("craftItem", { item: crafting, count: inputValue });
          setProgress(0);
          setCrafting(null);
          clearInterval(id);
        }
      }, (time * 1000 + 100) / 100);
    } else {
      post("craftItem", { item: crafting, count: inputValue });
      setCrafting(null);
    }
  };

  return (
    <Modal
      isOpen={crafting ? true : false}
      close={() => (!crafting?.crafting ? setCrafting(null) : {})}
    >
      <div className="flex flex-col gap-1 font-medium">
        <div className="flex gap-1 mb-1 justify-between items-center">
          <h1 className="text-lg">{crafting?.label}</h1>
          <button
            onClick={() => {
              if (!crafting?.crafting) {
                setCrafting(null);
              }
            }}
            className="bg-white focus:ring focus:bg-opacity-10 outline-none ring-blue-400 w-fit bg-opacity-5 hover:bg-opacity-10 p-3 rounded-md transition-all"
          >
            <FaTimes />
          </button>
        </div>

        <h2>{locales?.ingredientsHeader}</h2>
        <div className="grid w-full gap-1 mt-1 overflow-auto max-h-[17rem] mb-2">
          {crafting?.ingredients.length > 0 ? (
            crafting?.ingredients.map(
              (ingredient: IIngredient, index: number) => (
                <Ingredient key={"ingredient" + index} {...ingredient} />
              )
            )
          ) : (
            <Alert
              animate={false}
              text={locales?.notIngredientsFound}
              icon={<FaToolbox />}
            />
          )}
        </div>

        <div className="flex items-center justify-between w-full mt-2">
          {crafting?.type === "item_standard" ? (
            <p className="text-sm text-slate-300">
              {locales.thisMakes} x{crafting?.count} {crafting?.label}(s)
            </p>
          ) : (
            <p className="text-sm text-slate-300">
              {locales.thisMakes} x1 {crafting?.label}
            </p>
          )}

          <p className="text-sm flex gap-1 items-center text-slate-300">
            <FaClock /> {crafting?.time}s
          </p>
        </div>

        {crafting?.canCraft && (
          <button
            onClick={craft}
            disabled={crafting?.crafting ? true : false}
            className="w-full relative disabled:pointer-events-none disabled:opacity-50 outline-none overflow-hidden p-2 h-[2.5rem] bg-blue-500 focus:ring ring-blue-400 transition-all rounded-md mt-1 text-lg font-medium"
          >
            <div
              style={{
                width: progress + "%",
                transition: "width 0.1s linear",
              }}
              className="absolute h-full bg-blue-600 z-0 top-0 left-0"
            />
            <div className="w-full h-full absolute left-0 top-0 z-10 flex justify-center items-center">
              {crafting?.crafting ? locales?.crafting : locales?.craft}
            </div>
          </button>
        )}
      </div>
    </Modal>
  );
};

interface IIngredient {
  name: string;
  label: string;
  count: number;
  current: number;
}

const Ingredient: FC<IIngredient> = ({ name, label, count, current }) => {
  const { locales } = useCore();

  return (
    <div className="bg-white flex justify-between bg-opacity-5 items-center gap-2 rounded-md p-1 px-2">
      <div className="flex items-center gap-2">
        <img
          src={`./assets/items/${name}.png`}
          className="block"
          width={"30px"}
          style={{
            filter: "drop-shadow(1px 1px 5px rgba(0,0,0,.3))",
          }}
        />
        <h3>{label}</h3>
      </div>
      <p>
        {locales?.youHave} x{current} | x{count}
      </p>
    </div>
  );
};
