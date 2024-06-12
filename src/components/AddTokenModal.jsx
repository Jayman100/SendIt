import { useState } from "react";
import Button from "./Button";
import { useModal } from "../contexts/ModalContext";
import { useToken } from "../contexts/TokenContext";
import { useAccount } from "wagmi";

function AddTokenModal() {
  const [contractAddress, setContractAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const account = useAccount();
  const address = account?.address;

  const { TokenInfo, token } = useToken();
  const { setOpenModal } = useModal();

  function handleAddToken() {
    if (!contractAddress) {
      setErrorMessage(true);

      return;
    }

    TokenInfo(contractAddress, address);
    setOpenModal(false);
  }
  console.log(token);
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex flex-col gap-md">
        <input
          type="text"
          placeholder="Input the token contract address"
          value={contractAddress}
          onChange={(e) => {
            setContractAddress(e.target.value);
            setErrorMessage(false);
          }}
          className="bg-dark p-[10px] border border-button rounded-lg focus:outline-none focus:ring-0 focus:border-chart"
        />
        {errorMessage && (
          <p className="text-[14px]">Enter the contract address first!</p>
        )}
      </div>

      <Button onclick={handleAddToken}>Add</Button>
    </div>
  );
}

export default AddTokenModal;
