import { useToken } from "../contexts/TokenContext";
import TokenHeader from "./TokenHeader";
import TokensList from "./TokensList";

// const tokens = [
//   { name: "boden", amount: "156.27B", worth: 5680 },
//   { name: "trump", amount: "156.27B", worth: 5680 },
//   { name: "vga", amount: "156.27B", worth: 5680 },
//   { name: "davido", amount: "156.27B", worth: 5680 },
// ];

function Tokens() {
  const { token } = useToken();

  return (
    <div className="flex flex-col gap-6">
      <TokenHeader />
      {token.map((token, i) => (
        <TokensList token={token} key={i} />
      ))}
      {token.length === 0 && <p>Click add token button to view token!!!</p>}
    </div>
  );
}

export default Tokens;
