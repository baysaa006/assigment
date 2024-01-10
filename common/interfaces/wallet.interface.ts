import { User } from "./users.interface";

export interface Wallet {
  address: string;
  chainId: string;
  user: User;
  isSigned: boolean;
  signature: string;
}
