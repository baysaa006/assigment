import Web3, { Web3Eth } from "web3";

declare global {
  interface Window {
    ethereum?: any;
    web3: any;
  }
}

export const getProvider = () => {
  let provider;
  if (window.ethereum) {
    provider = window.ethereum;
  } else if (window.web3) {
    provider = window.web3;
  }

  return provider;
};

export const getSigner = async () => {
  return await getProvider().getSigner();
};

export const web3 = new Web3(window.ethereum);
