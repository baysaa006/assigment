import { getUser } from "api/user";
import axios from "axios";
import React, { useState } from "react";
import Web3 from "web3";

declare global {
  interface Window {
    ethereum?: any;
  }
}
export const Home = () => {
  const [account, setAccount] = useState<string>();
  const web3 = new Web3((globalThis as any).ethereum);

  async function getUserAddress() {
    try {
      if (window.ethereum !== undefined) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        const users = await getUser("123");

        if (users.status == 200) {
          console.log(users.data);
        } else {
          console.log(users.error);
        }
      } else {
        alert("install it ");
      }
    } catch (error) {
      console.error("Error fetching user address:", error);
      throw error;
    }
  }

  // async function getTokenBalances(userAddress: string) {
  //   try {
  //     // Replace 'tokenContractAddress' with the actual ERC-20 token contract address
  //     const tokenContract = new web3.eth.Contract(
  //       TokenABI,
  //       "tokenContractAddress"
  //     );

  //     // Get the balance of the token for the user
  //     const tokenBalance = await tokenContract.methods
  //       .balanceOf(userAddress)
  //       .call();

  //     return web3.utils.fromWei(tokenBalance, "ether");
  //   } catch (error) {
  //     console.error("Error fetching token balances:", error);
  //     throw error;
  //   }
  // }

  return (
    <div className="App">
      <button style={{ padding: 10, margin: 10 }} onClick={getUserAddress}>
        Connect
      </button>
      {account && <h1>{account}</h1>}
    </div>
  );
};

export default Home;
