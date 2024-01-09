import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { RequestWithUser, User } from '@common/interfaces';
import { AuthService } from '@services/auth.service';
import Web3 from 'web3';
import { logger } from '@/utils/logger';

export class AuthController {
  public auth = Container.get(AuthService);

  public getNonce = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { address } = req.query;

      const nonce = await this.auth.createNonce(address.toString());
      res.status(201).json({ data: nonce });
    } catch (error) {
      next(error);
    }
  };

  public verifySignature = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { signature } = req.body;

      const authHeader = req.headers['authorization'];
      const tempToken = authHeader && authHeader.split(' ')[1];

      if (tempToken === null) return res.status(403);

      const recoveredAddress = await this.auth.verifySignature(tempToken, signature.toString());

      res.status(200).json({ data: recoveredAddress, message: 'success' });
    } catch (error) {
      next(error);
    }
  };

  public signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: User = req.body;
      const signUpUserData: User = await this.auth.signup(userData);

      res.status(200).json({ data: signUpUserData, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };
}
