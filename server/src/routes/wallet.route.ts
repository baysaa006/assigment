import { Router } from 'express';
import { Routes } from '@common/interfaces';
import { WalletController } from '@/controllers/wallet.controller';

export class WalletRoute implements Routes {
  public path = '/wallet';
  public router = Router();
  public wallet = new WalletController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.wallet.getWallet);
  }
}
