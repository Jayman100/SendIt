import Modal from "../ui/modals/Modal";
import AddTokenModal from "./AddTokenModal";
import WalletConnect from "./WalletConnect";

function Header() {
  return (
    <div className="bg-headerBlue flex justify-between py-4 px-6 rounded-xl items-center">
      <div className="flex gap-4 items-center ">
        <div className="h-16 w-16 bg-dark rounded-full"></div>

        <Modal>
          <Modal.Open opens="add">
            <button className="bg-button py-4 px-10 rounded-lg ">
              Add Token
            </button>
          </Modal.Open>
          <Modal.Window name="add">
            <AddTokenModal />
          </Modal.Window>
        </Modal>
      </div>

      <div className="flex gap-4 items-center">
        <p className="bg-balance p-4 rounded-lg">2.768 ETH</p>
        <WalletConnect />
      </div>
    </div>
  );
}

export default Header;
