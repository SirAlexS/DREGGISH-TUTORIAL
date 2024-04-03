import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";
import { FaTimes, FaUserAltSlash } from "react-icons/fa";
import Alert from "./components/Alert";
import Hotbar from "./components/Hotbar";
import Inventory, { IInventory } from "./components/Inventory";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import { useDrag } from "./context/DragContext";
import { useMenu } from "./context/MenuContext";
import { post } from "./lib/fetch";

// notifications
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notify from "./components/Notify";
import { CraftingModal } from "./components/CraftingModal";
import { CompModal } from "./components/CompModal";

interface ICoreContext {
  visible: boolean;
  inventory?: IInventory;
  secondInv?: IInventory;
  crafting: any;
  setCrafting: any;
  components: any;
  setComponents: any;
  setGiveMenu?: any;
  giveMenu: any;
  locales: any;
  config: any;
}

const CoreContext = createContext({});
export const useCore = () => useContext(CoreContext) as ICoreContext;

const App = () => {
  const [visible, setVisible] = useState(false);
  const [inventory, setInventory] = useState<IInventory | null>(null);
  const [secondInv, setSecondInv] = useState<IInventory | null>(null);
  const [hotbar, setHotbar]: any = useState(null);
  const [giveMenu, setGiveMenu]: any = useState(null);
  const [locales, setLocales]: any = useState([]);
  const [crafting, setCrafting]: any = useState(null);
  const [components, setComponents]: any = useState(null);
  const [config, setConfig]: any = useState([]);
  const { menu, setMenu } = useMenu();
  const { inputValue, setLocked, setValue } = useDrag();

  let timer: any = null;

  const handleWebSocket = ({ data }: any) => {
    const msg = data;
    if (msg.type === "open") {
      setLocales(msg.locales);
      setValue(1);
      setInventory({
        type: "main",
        title: msg.locales.title,
        weight: {},
        hotbar: msg.hotbar,
      });
      setConfig(msg.config);
      setSecondInv(msg.secondInv);
      setHotbar(null);
      setLocked(false);
      clearTimeout(timer);
      timer = null;
      setVisible(true);
    } else if (msg.type === "close") {
      closeInventory(false);
    } else if (msg.type === "setItems") {
      setInventory((inv: any) => ({
        ...inv,
        ...msg.data,
      }));
    } else if (msg.type === "setSecondItems") {
      setSecondInv((inv: any) => ({
        ...inv,
        ...msg.data,
      }));
    } else if (msg.type === "showHotbar") {
      if (!timer) {
        setHotbar(msg.hotbar);
        timer = setTimeout(() => {
          setHotbar(null);
          timer = null;
        }, 3000);
      }
    } else if (msg.type === "notify") {
      notify(msg.msg, msg.level);
    }
  };

  const closeInventory = (toggle?: boolean) => {
    setVisible(false);

    if (toggle) post("close");

    setInventory(null);
    setSecondInv(null);
    setCrafting(null);
    setMenu(null);
    setLocked(false);
  };

  const giveItem = (player: string) => {
    if (!giveMenu) return;

    post("giveItem", {
      item: giveMenu.item,
      player: player,
      count: inputValue,
    });

    setGiveMenu(null);
  };

  const notify = (msg: string, type: string) => {
    toast(<Notify msg={msg} type={type} />);
  };

  useEffect(() => {
    const keyListener = (e: any) => {
      if (e.key === "Escape") {
        if (giveMenu) {
          setGiveMenu(null);
        } else if (crafting) {
          if (!crafting?.crafting) {
            setCrafting(null);
          }
        } else if (components) {
          setComponents(null);
        } else {
          closeInventory(true);
        }
      }
    };

    const closeOnClick = (e: any) => {
      if (config?.clickOutsideToClose) {
        if (e.target.contains(document.getElementById("inventory"))) {
          closeInventory(true);
        }
      }
    };

    window.addEventListener("message", handleWebSocket);
    window.addEventListener("keyup", keyListener);
    window.addEventListener("mousedown", closeOnClick);
    return () => {
      window.removeEventListener("message", handleWebSocket);
      window.removeEventListener("keyup", keyListener);
      window.removeEventListener("mousedown", closeOnClick);
    };
  }, [giveMenu, crafting, components, config]);

  return (
    <CoreContext.Provider
      value={{
        visible,
        inventory,
        secondInv,
        giveMenu,
        setGiveMenu,
        locales,
        crafting,
        setCrafting,
        components,
        setComponents,
        config,
      }}
    >
      {visible ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="flex gap-[4rem] items-center justify-center w-screen h-screen bg-gradient-to-br from-zinc-800 bg-black overflow-hidden to-transparent bg-opacity-70"
        >
          <Inventory
            type="main"
            title={inventory?.title}
            items={inventory?.items}
            weight={inventory?.weight}
            hotbar={inventory?.hotbar}
          />
          {secondInv && (
            <Inventory
              type={secondInv.type}
              title={secondInv.title}
              items={secondInv.items}
              weight={secondInv.weight}
            />
          )}

          {/* version */}
          <p className="absolute bottom-2 mx-auto font-bold text-white opacity-30">
            {locales?.version}
          </p>

          <Modal isOpen={giveMenu} close={() => setGiveMenu(null)}>
            <div className="flex flex-col gap-1 font-medium">
              <div className="flex gap-1 mb-3 justify-between items-center">
                <h1 className="text-lg">{locales?.playersHeader}</h1>
                <button
                  onClick={() => setGiveMenu(null)}
                  className="bg-white focus:ring focus:bg-opacity-10 outline-none ring-blue-400 w-fit bg-opacity-5 hover:bg-opacity-10 p-3 rounded-md transition-all"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="flex flex-col h-fit max-h-[17rem] overflow-auto gap-1">
                {giveMenu?.players.length > 0 ? (
                  giveMenu?.players.map((player: any) => (
                    <div
                      key={player.src}
                      onClick={() => giveItem(player.src)}
                      className="p-3 bg-white bg-opacity-5 rounded-md w-full hover:bg-opacity-10"
                    >
                      {player.name}
                    </div>
                  ))
                ) : (
                  <Alert
                    animate={false}
                    text={locales?.noPlayersFound}
                    icon={<FaUserAltSlash />}
                  />
                )}
              </div>
            </div>
          </Modal>

          <CraftingModal />
          <CompModal />

          <AnimatePresence>
            {menu?.x && <Menu x={menu.x} y={menu.y} data={menu.data} />}
          </AnimatePresence>
        </motion.div>
      ) : (
        <AnimatePresence>
          {hotbar && (
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              exit={{ y: 200 }}
              className="absolute bottom-1 w-full flex justify-center items-center"
            >
              <Hotbar external={true} items={hotbar} />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <ToastContainer
        hideProgressBar
        closeButton={false}
        draggable={false}
        pauseOnFocusLoss={false}
        transition={Slide}
        position="top-right"
        newestOnTop
        limit={secondInv ? 2 : 8}
      />
    </CoreContext.Provider>
  );
};

export default App;
