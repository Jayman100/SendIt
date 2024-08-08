import { useModal } from "../contexts/ModalContext";
import AddTokenModal from "./AddTokenModal";
import TransferModal from "./TransferModal";

function Modal() {
  const { openAddModal, openTransferModal, setOpenModal } = useModal();
  //  bg-dark top-1/2 left-1/2 px-[20px] py-[60px] translate-y-[-50%] translate-x-[-50%] rounded-xl

  return (
    <div className="absolute inset-0 flex justify-center bg-stone-200/20  items-center ">
      <div className="w-3/6 bg-dark relative px-[20px] py-[60px] rounded-xl ">
        <div>
          {openAddModal && <AddTokenModal />}
          {openTransferModal && <TransferModal />}
        </div>

        <button
          onClick={() => setOpenModal(false)}
          className="absolute right-[20px] top-[20px]"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
