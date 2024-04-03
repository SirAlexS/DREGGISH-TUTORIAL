import { createContext, FC, useContext, useEffect, useState } from "react";
import DragProvider from "./DragContext";

interface IMenuContext {
  menu: any;
  setMenu: (menu: any) => void;
}

const MenuContext = createContext({});

export const useMenu = () => useContext(MenuContext) as IMenuContext;

const MenuProvider: FC = ({ children }) => {
  const [menu, setMenu]: any = useState({});

  useEffect(() => {
    const hideMenu = (e: any) => {
      if (!document.getElementById("menu")?.contains(e.target)) {
        setMenu(false);
      }
    };

    window.addEventListener("mousedown", hideMenu);
    return () => {
      window.removeEventListener("mousedown", hideMenu);
    };
  }, []);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      <DragProvider>{children}</DragProvider>
    </MenuContext.Provider>
  );
};

export default MenuProvider;
