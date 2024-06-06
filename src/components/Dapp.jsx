import Charts from "./Charts";
import Header from "./Header";
import Tokens from "./Tokens";

function Dapp() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col my-4 gap-10">
      <Header />
      <Charts />
      <Tokens />
    </div>
  );
}

export default Dapp;
