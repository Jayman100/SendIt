// import { ethers } from "ethers";
// import { erc20Abi } from "viem";
// import { FACTORY_ADDRESS } from "@uniswap/v3-sdk";
// import factoryAbi from "../ABI/factoryAbi.json";

// const token1Address = "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"; // UNI token address
// const token2Address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"; // WETH token address

export async function getPrice(contractAddress) {
  // console.log(FACTORY_ADDRESS);
  // const provider = new ethers.JsonRpcProvider(
  //   "https://mainnet.infura.io/v3/ee0facf4b323453381aa960d4dfa1cf5"
  // );

  // const factoryContract = new ethers.Contract(
  //   FACTORY_ADDRESS,
  //   factoryAbi,
  //   provider
  // );

  // //getPool method to retrieve the pool address
  // const poolAddress = await factoryContract.getPool(
  //   token1Address,
  //   token2Address,
  //   3000
  // );
  // console.log("Pool Address:", poolAddress);

  // const token1Contract = new ethers.Contract(token1Address, erc20Abi, provider);

  // const token1Balance = await token1Contract.balanceOf(poolAddress);
  // const token2Contract = new ethers.Contract(token2Address, erc20Abi, provider);

  // const token2Balance = await token2Contract.balanceOf(poolAddress);

  // console.log("uni:", ethers.formatEther(token1Balance));
  // console.log("WETH:", ethers.formatEther(token2Balance));

  // const priceFeed = await fetch(
  //   "https://api.coingecko.com/api/v3/simple/price?ids=toby-toadgod&vs_currencies=usd"
  // );

  const priceFeed = await fetch(
    `https://api.coingecko.com/api/v3/simple/token_price/base?contract_addresses=${contractAddress}&vs_currencies=usd`
  );

  const amountData = await priceFeed.json();

  const price = Object.values(amountData)[0].usd;

  return price;

  // const price =
  //   (Number(ethers.formatEther(token2Balance)) * amountData.ethereum.usd) /
  //   Number(ethers.formatEther(token1Balance));
  // console.log("ETH/USD price =", amountData.ethereum.usd);
  // console.log("Uni price:", price);
}
