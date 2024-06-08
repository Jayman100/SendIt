import { createContext, useContext, useState } from "react";
import { useAccount } from "wagmi";

const modalContext = createContext(null);

function ModalProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openTransferModal, setOpenTransferModal] = useState(false);

  const account = useAccount();

  const address = account?.address;

  function handleOpenAddModal() {
    if (address === undefined) return;
    setOpenModal(true);
    setOpenAddModal(true);
    setOpenTransferModal(false);
  }
  function handleOpenTransferModal() {
    setOpenModal(true);
    setOpenTransferModal(true);
    setOpenAddModal(false);
  }

  return (
    <modalContext.Provider
      value={{
        handleOpenAddModal,
        handleOpenTransferModal,
        openAddModal,
        openModal,
        openTransferModal,
        setOpenModal,
      }}
    >
      {children}
    </modalContext.Provider>
  );
}

function useModal() {
  const context = useContext(modalContext);

  return context;
}

export { useModal, ModalProvider };
