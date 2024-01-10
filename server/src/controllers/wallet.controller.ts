import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Wallet } from '@common/interfaces';
import { WalletService } from '@/services/wallet.service';

export class WalletController {
  public wallet = Container.get(WalletService);

  public getWallet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const wallet = Number(req.params.id);

      const found: Wallet = await this.wallet.getWallet(wallet);

      res.status(200).json({ data: found });
    } catch (error) {
      next(error);
    }
  };
}
