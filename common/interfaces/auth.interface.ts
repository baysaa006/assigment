import { Request } from "express";

export interface DataStoredInToken {
  id: number;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface Payload {
  iss: string;
  address: string;
  signature: string;
  nonce: string;
  exp: number;
}

export interface RequestWithPayload extends Request {
  payload: Payload;
}
