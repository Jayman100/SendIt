import { useAccount } from "wagmi";
import Dapp from "./components/Dapp";
import { useModal } from "./contexts/ModalContext";
import "@rainbow-me/rainbowkit/styles.css";
import { useEffect } from "react";

function App() {
  const { openModal } = useModal();
  const account = useAccount();

  const address = account?.address;

  const URL =
    "https://api.etherscan.io/api?module=contract&action=getabi&address=0xac00797df10e825589D8b53E715393BE4E617459&apikey=KCPGQ179X8WFBVNNJC6BFKXI16PCYIA24J ";

  useEffect(() => {
    async function main() {
      // making an API call to the ABIs endpoint
      const response = await fetch(URL);
      const data = await response.json();

      //Getting the abi
      let abi = data.result;
      console.log(abi);
    }

    main();
  }, []);

  const style =
    "before:absolute before:h-[100%] before:w-[100%] before:bg-black";

  return (
    <main
      className={`bg-dark text-white text-xl ${openModal && style} ${
        !address && "h-lvh"
      } `}
    >
      <Dapp />
    </main>
  );
}

export default App;
