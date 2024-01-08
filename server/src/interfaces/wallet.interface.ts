import { Token } from './token.interface';
import { User } from './users.interface';

export interface Wallet {
  address: string;
  tokens: Token[];
  chainId: string;
  user: User;
}
