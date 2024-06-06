import { WagmiProvider, useConfig } from "wagmi";
import Dapp from "./components/Dapp";
import { useModal } from "./contexts/ModalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import "./index.css";

const queryClient = new QueryClient();

function App() {
  const { openModal } = useModal();

  const style =
    "before:absolute before:h-[100%] before:w-[100%] before:bg-black";

  return (
    <main className={`bg-dark text-white text-xl ${openModal && style}`}>
      <Dapp />
    </main>
  );
}

export default App;
