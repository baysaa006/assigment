import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { User } from '@common/interfaces';
import { UserService } from '@services/users.service';
import { NO_USER, ServiceException } from '@common/exceptions';
import { getAuthorization } from '@/utils/functions';
import { AuthService } from '@/services/auth.service';

export class UserController {
  public user = Container.get(UserService);
  public auth = Container.get(AuthService);

  public checkUserName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { name } = req.query;

      const exist = await this.user.findUserByName(name.toString());

      res.status(200).json({ data: exist });
    } catch (error) {
      next(error);
    }
  };

  public getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const tempToken = getAuthorization(req);

      const payload = await this.auth.decodeToken(tempToken);

      const user = await this.user.findUserByAdrress(payload.address);

      if (!user) next(new ServiceException(NO_USER));

      res.status(200).json({ data: user, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const tempToken = getAuthorization(req);

      const payload = await this.auth.decodeToken(tempToken);

      const user = await this.user.findUserByAdrress(payload.address);

      if (!user) throw new ServiceException(NO_USER);

      const userData = req.body;

      console.log(userData.body);

      const updateUserData = await this.user.updateUser(user.id, userData.body);

      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };
}
