import { Router } from 'express';
import { UserController } from '@controllers/users.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@common/interfaces';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class UserRoute implements Routes {
  public path = '/users';
  public router = Router();
  public user = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.user.getUsers);
    this.router.get(`${this.path}/:id(\\d+)`, this.user.getUserById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateUserDto), this.user.createUser);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(CreateUserDto, true), this.user.updateUser);
    this.router.delete(`${this.path}/:id(\\d+)`, this.user.deleteUser);
  }
}
