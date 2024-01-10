import { getProvider, web3 } from "providers";
import create from "zustand";
import { getNonce, verifySignature } from "api";
import { Payload } from "@common/interfaces";
import { persist } from "zustand/middleware";
import decode from "jwt-decode";

export type TAuthStore = {
  payload: Payload;
  logged: boolean;
  connectWallet(callback: () => void): void;
  getPayload(): Payload;
  logOut(): void;
  config: {
    name: string;
  };
};

export const authStore = create<TAuthStore>(
  //@ts-ignore
  persist(
    (set: any, get: any) => ({
      logged: false,
      payload: {
        address: "",
        signature: "",
        nonce: "",
        exp: 0,
      },
      getPayload: () => {
        if (!get()?.payload || get()?.payload?.address === "") return;
        return decode(get().payload);
      },
      connectWallet: async (callback: any) => {
        const requestAccounts = async (provider: any) => {
          await provider.request({ method: "eth_requestAccounts" });
        };

        const signMessage = async (account: string, message: string) => {
          try {
            const signature = await web3.eth.personal.sign(
              message,
              account,
              ""
            );
            return signature;
          } catch (error) {
            console.error("Error signing message:", error);
          }
        };

        const openMetamaskDownloadPage = async () => {
          window.open("https://metamask.io/download/", "_blank");
        };

        try {
          const provider = getProvider();
          if (provider) {
            await requestAccounts(provider);
            const accounts = await web3.eth.getAccounts();
            const nonce = await getNonce(accounts[0]);
            if (nonce) {
              const signature = await signMessage(
                accounts[0],
                nonce.data.message
              );
              if (signature) {
                const data = await verifySignature(
                  signature,
                  nonce.data.tempToken
                );
                if (!data.data.isSigned) {
                  callback();
                }
                set({ payload: data.data.token, logged: true });
              }
            }
          } else {
            openMetamaskDownloadPage();
          }
        } catch (error) {
          console.error("Error fetching user address:", error);
        }
      },
      logOut: () => {
        set({ payload: "", logged: false });
      },
    }),
    { name: "assgiment" }
  )
);

export default authStore;
