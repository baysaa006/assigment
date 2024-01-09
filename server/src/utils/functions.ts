import { SECRET_KEY } from '@/config';
import { DataStoredInToken, TokenData, User } from '@common/interfaces';
import { sign } from 'jsonwebtoken';

export const createToken = (user: User): TokenData => {
  const dataStoredInToken: DataStoredInToken = { id: user.id };
  const secretKey: string = SECRET_KEY;
  const expiresIn: number = 60 * 60;

  return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
};

export const getMessage = (nonce: string, address: string): string => {
  return `Please sing this to access assigment project. 
    \n NONCE: ${nonce}
    \n Wallet: ${address};`;
};

export const createCookie = (tokenData: TokenData): string => {
  return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
};
