import { createContext, useContext, useState } from "react";
import { useAccount } from "wagmi";

const modalContext = createContext("");

function ModalProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openTransferModal, setOpenTransferModal] = useState(false);
  const [modalName, setModalName] = useState("");
  const [currentContractAddress, setCurrentContractAddress] = useState("");

  // const [token, setToken] = useState([]);

  const account = useAccount();

  function handleOpenAddModal() {
    if (!account.isConnected) return;
    setOpenModal(true);
    setOpenAddModal(true);
    setOpenTransferModal(false);
  }
  function handleOpenTransferModal(name, contractAddress) {
    setOpenModal(true);
    setOpenTransferModal(true);
    setOpenAddModal(false);
    setModalName(name);
    setCurrentContractAddress(contractAddress);
  }

  // function addToken(contractAddress) {
  //   TokenInfo(contractAddress, address);

  //   setToken((token) => [...token, { balance, symbol }]);
  // }

  return (
    <modalContext.Provider
      value={{
        handleOpenAddModal,
        handleOpenTransferModal,
        openAddModal,
        openModal,
        openTransferModal,
        setOpenModal,
        modalName,
        currentContractAddress,
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
