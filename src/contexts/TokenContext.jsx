import { ethers, parseUnits } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";
import abi from "erc-20-abi";
import { useAccount } from "wagmi";
import { getPrice } from "../test/uniswapPrice";

const tokenContext = createContext("");

export function TokenProvider({ children }) {
  const [token, setToken] = useState([]);
  const [price, setPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");
  const account = useAccount();
  const isConnected = account.isConnected;
  const address = account?.address;

  // const URL = "https://mainnet.infura.io/v3/ee0facf4b323453381aa960d4dfa1cf5";
  const URL = "https://mainnet.base.org";

  useEffect(() => {
    const tokenSaved = JSON.parse(localStorage.getItem("myTokens"));
    if (tokenSaved && isConnected) {
      const mappedToken = tokenSaved.map((token) => {
        getPrice(token.contractAddress).then(
          (updatedPrice) => (token.price = updatedPrice)
        );

        return token;
      });
      console.log(mappedToken);
      setToken(mappedToken);
    }
    console.log(tokenSaved);
  }, [isConnected]);

  async function tokenInfo(contractAddress, address) {
    try {
      setIsLoading(true);
      const provider = new ethers.JsonRpcProvider(URL);

      const contract = new ethers.Contract(contractAddress, abi, provider);

      console.log(contract);
      const balance = await contract.balanceOf(address);

      const name = await contract.symbol();

      const balanceInt = ethers.formatEther(balance);
      const balanceString = balanceInt.toString();

      getPrice(contractAddress).then((price) => {
        setPrice(price);
        const newToken = { balanceString, name, price, contractAddress };

        setToken((token) => [...token, newToken]);
        const data = token ? [...token, newToken] : token;

        localStorage.setItem("myTokens", JSON.stringify(data));
      });

      localStorage.setItem("myAddress", JSON.stringify(address));

      setIsLoading(false);
    } catch (err) {
      console.error(err.message);

      return;
    } finally {
      setIsLoading(false);
    }
  }

  async function TransferToken(contractAddress, amount, recipient) {
    const provider = new ethers.JsonRpcProvider(URL);

    const contract = new ethers.Contract(contractAddress, abi, provider);

    const decimal = await contract.decimals();
    const tokenSigner = contract.connect(address);

    // const readWriteContract = new ethers.Contract(
    //   contractAddress,
    //   abi,
    //   address
    // );
    // console.log(readWriteContract);

    const transaction = await tokenSigner.transfer(
      recipient,
      parseUnits(amount, decimal)
    );

    await transaction.wait();

    console.log(transaction);
  }

  return (
    <tokenContext.Provider
      value={{ token, tokenInfo, TransferToken, isLoading }}
    >
      {children}
    </tokenContext.Provider>
  );
}

export function useTokens() {
  const context = useContext(tokenContext);

  return context;
}
