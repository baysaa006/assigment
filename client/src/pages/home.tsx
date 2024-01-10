import { useContext, useState } from "react";
import { User } from "@common/interfaces";
import { getProvider, web3 } from "providers";
import { getNonce, verifySignature } from "api";
import { AuthContext, setAccessToken } from "contexts/auth.context";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "components/layouts";

export interface UserResponse {
  data: User[];
}

export const Home = () => {
  const [account, setAccount] = useState<string>();
  const { authenticate } = useContext(AuthContext);
  const navigate = useNavigate();

  async function getUserAddress() {
    try {
      const provider = getProvider();
      if (provider) {
        await requestAccounts(provider);
        const accounts = await web3.eth.getAccounts();
        const nonce = await getNonce(accounts[0]);
        setAccessToken(nonce.data.tempToken);
        if (nonce) {
          const signature = await signMessage(accounts[0], nonce.data.message);
          if (signature) {
            const data = await verifySignature(signature);
            localStorage.setItem("token", data.data);
            authenticate(data.data, () => navigate("/admin"));
          }
        }
        setAccount(accounts[0]);
      } else {
        openMetamaskDownloadPage();
      }
    } catch (error) {
      console.error("Error fetching user address:", error);
    }
  }

  async function requestAccounts(provider: any) {
    await provider.request({ method: "eth_requestAccounts" });
  }

  async function signMessage(account: string, message: string) {
    try {
      const signature = await web3.eth.personal.sign(message, account, "");
      return signature;
    } catch (error) {
      console.error("Error signing message:", error);
    }
  }

  function openMetamaskDownloadPage() {
    window.open("https://metamask.io/download/", "_blank");
  }

  return (
    <PageContainer>
      <button style={{ padding: 10, margin: 10 }} onClick={getUserAddress}>
        Connect
      </button>
      {account && <h1>{account}</h1>}
    </PageContainer>
  );
};

export default Home;
