import { useAccount } from "wagmi";
import Charts from "./Charts";
import Header from "./Header";
// import Modal from "./Modal";
import Tokens from "./Tokens";
import NoAddress from "./NoAddress";

function Dapp() {
  const account = useAccount();

  return (
    <div className={`max-w-screen-lg mx-auto flex flex-col py-8 gap-10  `}>
      <Header />
      {account.isConnected && <Charts />}
      {account.isConnected && <Tokens />}
      {!account.isConnected && <NoAddress />}
    </div>
  );
}

export default Dapp;
