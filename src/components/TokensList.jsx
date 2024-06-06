function TokensList({ token }) {
  const { name, amount, worth } = token;

  return (
    <div className="bg-token flex justify-between py-4 px-8 rounded-xl">
      <div className="flex justify-between w-3/6">
        <p>{`$${name.toUpperCase()}`}</p>
        <p>{amount}</p>
        <p className="text-price">{`$${worth}`}</p>
      </div>

      <button className="underline underline-offset-8 hover:text-chart">
        Transfer
      </button>
    </div>
  );
}

export default TokensList;
