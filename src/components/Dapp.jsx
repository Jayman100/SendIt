import { useAccount } from "wagmi";
import { useModal } from "../contexts/ModalContext";
import Charts from "./Charts";
import Header from "./Header";
import Modal from "./Modal";
import Tokens from "./Tokens";
import NoAddress from "./NoAddress";

function Dapp() {
  const { openModal } = useModal();
  const account = useAccount();

  return (
    <div
      className={`max-w-screen-lg mx-auto flex flex-col py-8 gap-10 relative `}
    >
      <Header />
      {account.isConnected && <Charts />}
      {account.isConnected && <Tokens />}
      {!account.isConnected && <NoAddress />}
      {openModal && <Modal />}
    </div>
  );
}

export default Dapp;
