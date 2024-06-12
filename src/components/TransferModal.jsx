import { useState } from "react";
import { useModal } from "../contexts/ModalContext";
import Button from "./Button";
import { useToken } from "../contexts/TokenContext";

function TransferModal() {
  const [recipientaAddress, setRecipientAddress] = useState("");
  const [amount, setAmount] = useState("");
  const { modalName, currentContractAddress } = useModal();
  const { TransferToken } = useToken();

  function handleSend() {
    TransferToken(currentContractAddress, amount, recipientaAddress);
  }

  return (
    <div className="flex flex-col gap-[40px]">
      <p>{modalName}</p>
      <p>{currentContractAddress}</p>
      <input
        type="text"
        placeholder="Input the recipient address"
        className="bg-dark p-[10px] border border-button rounded-lg focus:outline-none focus:ring-0 focus:border-chart "
        value={recipientaAddress}
        onChange={(e) => setRecipientAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Input the Amount"
        className="bg-dark p-[10px] border border-button rounded-lg focus:outline-none focus:ring-0 focus:border-chart"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <Button onclick={handleSend}>Send</Button>
    </div>
  );
}

export default TransferModal;
