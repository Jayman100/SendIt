import { useModal } from "../contexts/ModalContext";
import Charts from "./Charts";
import Header from "./Header";
import Modal from "./Modal";
import Tokens from "./Tokens";

function Dapp() {
  const { openModal } = useModal();

  return (
    <div
      className={`max-w-screen-lg mx-auto flex flex-col py-8 gap-10 relative`}
    >
      <Header />
      <Charts />
      <Tokens />
      {openModal && <Modal />}
    </div>
  );
}

export default Dapp;
