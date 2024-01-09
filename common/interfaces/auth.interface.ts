import { Request } from "express";
import { User } from ".";

export interface DataStoredInToken {
  id: number;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface Payload {
  address: string;
  signature: string;
  nonce: string;
  exp: number;
}

export interface RequestWithUser extends Request {
  user: User;
}
