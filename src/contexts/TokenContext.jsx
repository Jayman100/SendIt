import { ethers, parseUnits } from "ethers";
import { createContext, useContext, useState } from "react";
import abi from "../ABI/ERC20.json";
import { useAccount } from "wagmi";

const tokenContext = createContext("");

export function TokenProvider({ children }) {
  const [token, setToken] = useState([]);
  const account = useAccount();
  const address = account?.address;
  const URL = "https://mainnet.infura.io/v3/ee0facf4b323453381aa960d4dfa1cf5";

  async function TokenInfo(contractAddress, address) {
    const provider = new ethers.JsonRpcProvider(URL);

    const contract = new ethers.Contract(contractAddress, abi, provider);

    const balance = await contract.balanceOf(address);

    const name = await contract.symbol();

    const balanceString = balance.toString();

    setToken((token) => [
      ...token,
      { balanceString, name, price: 5000, contractAddress },
    ]);
  }

  async function TransferToken(contractAddress, amount, recipient) {
    const provider = new ethers.JsonRpcProvider(URL);

    const contract = new ethers.Contract(contractAddress, abi, provider);

    const decimal = await contract.decimals();
    const transaction = await contract.transfer.staticCall(
      recipient,
      parseUnits(amount, decimal)
    );

    transaction.wait();

    console.log(transaction);
  }

  return (
    <tokenContext.Provider value={{ token, TokenInfo, TransferToken }}>
      {children}
    </tokenContext.Provider>
  );
}

export function useToken() {
  const context = useContext(tokenContext);

  return context;
}
