import Modal from "../ui/modals/Modal";
import TransferModal from "./TransferModal";

function TokensList({ token }) {
  const { name, balanceString: amount, price: worth, contractAddress } = token;

  return (
    <div className="bg-token flex justify-between py-4 px-8 rounded-xl">
      <div className="flex w-[70%]">
        <p className="w-[15%]">{`$${name.toUpperCase()}`}</p>
        <p className="w-[25%]">{Number(amount).toFixed(2)}</p>
        <p className="text-price w-[15%]">{`$${(worth * amount).toFixed(
          2
        )}`}</p>
        <p className="text-price">{`$${Number(worth).toFixed(10)}`}</p>
      </div>

      <Modal>
        <Modal.Open opens="transfer">
          <button className="underline underline-offset-8 hover:text-chart">
            Transfer
          </button>
        </Modal.Open>

        <Modal.Window name="transfer">
          <TransferModal
            modalName={name}
            currentContractAddress={contractAddress}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default TokensList;
