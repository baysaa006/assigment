import { Router } from 'express';
import { AuthController } from '@controllers/auth.controller';
import { Routes } from '@common/interfaces';
import { VerifyTokenMiddleware } from '@middlewares/auth.middleware';

export class AuthRoute implements Routes {
  public router = Router();
  public auth = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/check', this.auth.checkSignature);
    this.router.get('/nonce', this.auth.getNonce);
    this.router.post('/verify', VerifyTokenMiddleware, this.auth.verifySignature);
  }
}
