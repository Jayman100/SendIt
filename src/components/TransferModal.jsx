import Button from "./Button";

function TransferModal() {
  return (
    <div className="flex flex-col gap-[40px]">
      <input
        type="text"
        placeholder="Input the recipient address"
        className="bg-dark p-[10px] border border-button rounded-lg focus:outline-none focus:ring-0 focus:border-chart "
      />
      <input
        type="text"
        placeholder="Input the Amount"
        className="bg-dark p-[10px] border border-button rounded-lg focus:outline-none focus:ring-0 focus:border-chart "
      />

      <Button>Send</Button>
    </div>
  );
}

export default TransferModal;
