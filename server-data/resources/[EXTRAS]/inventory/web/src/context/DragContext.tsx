import { createContext, FC, useContext, useEffect, useState } from "react";
import { post } from "../lib/fetch";
import { playSound } from "../lib/sound";

interface IDragContext {
  inputValue: number;
  dragging: any;
  setValue: any;
  drag: (ele: any, data?: any) => void;
  drop: (data?: any) => void;
  stopDrag: () => void;
  locked: boolean;
  setLocked: any;
  lockInv: any;
}

const DragContext = createContext({});

export const useDrag = () => useContext(DragContext) as IDragContext;

const DragProvider: FC = ({ children }) => {
  const [inputValue, setValue] = useState(1);
  const [dragging, setDragging]: any = useState(null);
  const [locked, setLocked] = useState(false);

  const lockInv = () => {
    setLocked(true);
    setTimeout(() => {
      setLocked(false);
    }, 200);
  };

  const drag = (ele: any, data?: any) => {
    var element = ele.target.cloneNode(true);
    let cursorX = ele.clientX;
    let cursorY = ele.clientY;
    element.classList.add("dragging");
    element.style.left = cursorX - 35 + "px";
    element.style.top = cursorY - 40 + "px";
    var dragElement = document.body.appendChild(element);
    setDragging({ element: dragElement, data: data });
  };

  const drop = (data?: any) => {
    if (dragging) {
      if (data) {
        if (data.inv === "hotbar") {
          if (dragging.data.inv === "main" || "hotbar") {
            post("hotbarAdd", {
              slot: data.slot,
              item: dragging.data,
            });
            playSound("drop.wav");
          }
        } else {
          if (dragging.data.inv === "hotbar") {
            post("removeItemFromHotbar", { slot: dragging.data.slot });
            playSound("remove.wav");
          } else {
            if (data.inv !== dragging.data.inv) {
              if (data.inv === "main") {
                if (!locked) {
                  post("addItemToPlayer", {
                    item: dragging.data,
                    count: inputValue,
                  });
                  lockInv();
                }
              } else {
                if (!locked) {
                  post("addItemToInventory", {
                    item: dragging.data,
                    count: inputValue,
                  });
                  lockInv();
                }
              }
              playSound("drop.wav");
            }
          }
        }
      } else {
        if (dragging.data.inv === "main") {
          if (dragging.data.canRemove) {
            if (!locked) {
              post("removeItem", {
                item: dragging.data,
                count: inputValue,
              });
              lockInv();
              playSound("remove.wav");
            }
          }
        } else if (dragging.data.inv === "hotbar") {
          post("removeItemFromHotbar", { slot: dragging.data.slot });
          playSound("remove.wav");
        }
      }

      stopDrag();
    }
  };

  const moveItem = (event: any) => {
    event.preventDefault();
    let cursorX = event.clientX;
    let cursorY = event.clientY;
    if (dragging) {
      dragging.element.style.left = cursorX - 35 + "px";
      dragging.element.style.top = cursorY - 40 + "px";
    }
  };

  const handleDrop = (e: any) => {
    e.preventDefault();

    if (!dragging) return;
    drop();
  };

  const stopDrag = () => {
    if (!dragging) return;
    dragging.element.remove();
    setDragging(null);
  };

  useEffect(() => {
    document.addEventListener("mousemove", moveItem);
    document.addEventListener("mouseup", handleDrop);
    window.addEventListener("blur", stopDrag);
    return () => {
      document.removeEventListener("mousemove", moveItem);
      document.removeEventListener("mouseup", handleDrop);
      window.removeEventListener("blur", stopDrag);
    };
  }, [dragging]);

  return (
    <DragContext.Provider
      value={{
        dragging,
        drag,
        drop,
        inputValue,
        setValue,
        stopDrag,
        locked,
        setLocked,
        lockInv,
      }}
    >
      {children}
    </DragContext.Provider>
  );
};

export default DragProvider;
