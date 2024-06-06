import Button from "./Button";

function AddTokenModal() {
  return (
    <div className="flex flex-col gap-[40px]">
      <input
        type="text"
        placeholder="Input the token contract address"
        className="bg-dark p-[10px] border border-button rounded-lg focus:outline-none focus:ring-0 focus:border-chart"
      />

      <Button>Add</Button>
    </div>
  );
}

export default AddTokenModal;
