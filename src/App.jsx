import { useAccount } from "wagmi";
import Dapp from "./components/Dapp";
import { useModal } from "./contexts/ModalContext";
import "@rainbow-me/rainbowkit/styles.css";
import { useEffect } from "react";

function App() {
  const { openModal } = useModal();
  const account = useAccount();
  const style =
    "before:absolute before:h-[100%] before:w-[100%] before:bg-black";

  return (
    <main
      className={`bg-dark text-white text-xl h-lvh overflow-y-scroll ${
        openModal && style
      }  `}
    >
      <Dapp />
    </main>
  );
}

export default App;
