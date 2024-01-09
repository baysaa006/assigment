import { Wallet } from './wallet.interface';

export interface User {
  id?: number;
  email?: string;
  phone?: string;
  wallets: Wallet[];
}
