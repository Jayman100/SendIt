import TokenHeader from "./TokenHeader";
import TokensList from "./TokensList";

const tokens = [
  { name: "boden", amount: "156.27B", worth: 5680 },
  { name: "trump", amount: "156.27B", worth: 5680 },
  { name: "vga", amount: "156.27B", worth: 5680 },
  { name: "davido", amount: "156.27B", worth: 5680 },
];

function Tokens() {
  return (
    <div className="flex flex-col gap-6">
      <TokenHeader />
      {tokens.map((token, i) => (
        <TokensList token={token} key={i} />
      ))}
    </div>
  );
}

export default Tokens;
