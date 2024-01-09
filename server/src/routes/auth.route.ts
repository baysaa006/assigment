import { Router } from 'express';
import { AuthController } from '@controllers/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@common/interfaces';
import { AuthMiddleware } from '@middlewares/auth.middleware';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class AuthRoute implements Routes {
  public router = Router();
  public auth = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/nonce', this.auth.getNonce);
    this.router.post('/verify', this.auth.verifySignature);
    this.router.post('/signup', ValidationMiddleware(CreateUserDto), this.auth.signUp);
  }
}
