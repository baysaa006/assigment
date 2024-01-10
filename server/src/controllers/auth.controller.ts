import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { User } from '@common/interfaces';
import { AuthService } from '@services/auth.service';
import { getAuthorization } from '@/utils/functions';
import { WalletService } from '@/services/wallet.service';
import { UserEntity } from '@/entities/users.entity';
import { UserService } from '@/services/users.service';

export class AuthController {
  public auth = Container.get(AuthService);
  public wallet = Container.get(WalletService);
  public user = Container.get(UserService);

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

      let wallet = await this.wallet.getWallet(payload.address);

      let isSigned = false;

      if (!wallet) {
        wallet = await this.wallet.createWallet(payload);

        let user = await this.user.findUserByAdrress(wallet.address);
        if (!user) {
          user = new UserEntity();
          user.address = wallet.address;
          user = await user.save();
        }
      } else {
        isSigned = wallet.isSigned;
      }

      res.status(200).json({ data: { token, isSigned }, message: 'success' });
    } catch (error) {
      next(error);
    }
  };

  public checkSignature = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { address } = req.query;

      const nonce = await this.auth.check(address.toString());
      res.status(201).json({ data: nonce });
    } catch (error) {
      next(error);
    }
  };
}
