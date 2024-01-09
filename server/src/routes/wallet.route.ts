import { Router } from 'express';
import { Routes } from '@common/interfaces';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { WalletController } from '@/controllers/wallet.controller';

export class WalletRoute implements Routes {
  public path = '/wallet';
  public router = Router();
  public user = new WalletController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {}
}
