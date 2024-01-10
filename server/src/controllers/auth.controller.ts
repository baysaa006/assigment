import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { User } from '@common/interfaces';
import { AuthService } from '@services/auth.service';
import { getAuthorization } from '@/utils/functions';
import { WalletService } from '@/services/wallet.service';

export class AuthController {
  public auth = Container.get(AuthService);
  public wallet = Container.get(WalletService);

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

      const tempToken = getAuthorization(req);

      const payload = await this.auth.decodeToken(tempToken);

      const token = await this.auth.verifySignature(payload, signature.toString());

      await this.wallet.createWallet(payload.address);
      res.status(200).json({ data: token, message: 'success' });
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
