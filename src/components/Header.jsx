import { useModal } from "../contexts/ModalContext";
import Button from "./Button";
import WalletConnect from "./WalletConnect";

function Header() {
  const { handleOpenAddModal } = useModal();

  return (
    <div className="bg-headerBlue flex justify-between py-4 px-6 rounded-xl items-center">
      <div className="flex gap-4 items-center ">
        <div className="h-16 w-16 bg-dark rounded-full"></div>
        <Button onclick={handleOpenAddModal}>Add Token</Button>
      </div>

      <div className="flex gap-4 items-center">
        <p className="bg-balance p-4 rounded-lg">2.768 ETH</p>
        <WalletConnect />
      </div>
    </div>
  );
}

export default Header;
