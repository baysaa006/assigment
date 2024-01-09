import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { UserEntity } from '@entities/users.entity';
import { ServiceException } from '@common/exceptions';
import { DataStoredInToken, RequestWithUser } from '@common/interfaces';
import { INVALID_TOKEN } from '@common/exceptions/Errors';

const getAuthorization = req => {
  const coockie = req.cookies['Authorization'];
  if (coockie) return coockie;

  const header = req.header('Authorization');
  if (header) return header.split('Bearer ')[1];

  return null;
};

export const AuthMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const Authorization = getAuthorization(req);

    if (Authorization) {
      const { id } = (await verify(Authorization, SECRET_KEY)) as DataStoredInToken;
      const findUser = await UserEntity.findOne(id);

      if (findUser) {
        req.user = findUser;
        next();
      } else {
        next(new ServiceException(INVALID_TOKEN));
      }
    } else {
      next(new ServiceException(INVALID_TOKEN));
    }
  } catch (error) {
    next(new ServiceException(INVALID_TOKEN));
  }
};
