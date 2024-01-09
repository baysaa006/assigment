import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { User } from '@common/interfaces';
import { logger } from '@/utils/logger';
import { WalletService } from '@/services/wallet.service';

export class WalletController {
  public user = Container.get(WalletService);
}
