import { Router } from 'express';
import { UserController } from '@controllers/users.controller';
import { Routes } from '@common/interfaces';
import { AuthMiddleware } from '@/middlewares/auth.middleware';

export class UserRoute implements Routes {
  public path = '/users';
  public router = Router();
  public user = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/check`, AuthMiddleware, this.user.checkUserName);
    this.router.get(`${this.path}`, AuthMiddleware, this.user.getUser);
    this.router.post(`${this.path}`, AuthMiddleware, this.user.updateUser);
  }
}
