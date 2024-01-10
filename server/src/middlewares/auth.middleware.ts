import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { ServiceException } from '@common/exceptions';
import { Payload, RequestWithPayload } from '@common/interfaces';
import { INVALID_TOKEN, TOKEN_EXPIRED } from '@common/exceptions/Errors';
import { WalletEntity } from '@/entities/wallet.entity';
import { getAuthorization } from '@/utils/functions';

export const AuthMiddleware = async (req: RequestWithPayload, res: Response, next: NextFunction) => {
  try {
    const Authorization = getAuthorization(req);

    if (!Authorization) next(new ServiceException(INVALID_TOKEN));

    verify(Authorization, SECRET_KEY, async (err, decoded: Payload) => {
      if (err) throw new ServiceException(INVALID_TOKEN);

      const exist = await WalletEntity.findOne({ where: { address: decoded.address } });

      if (!exist) throw new ServiceException(INVALID_TOKEN);

      if (decoded.exp * 1000 < new Date().getTime()) {
        throw new ServiceException(TOKEN_EXPIRED);
      }
      req.payload = decoded;

      next();
    });
  } catch (error) {
    next(error);
  }
};

export const VerifyTokenMiddleware = async (req: RequestWithPayload, res: Response, next: NextFunction) => {
  try {
    const Authorization = getAuthorization(req);

    if (!Authorization) throw new ServiceException(INVALID_TOKEN);

    const payload = verify(Authorization, SECRET_KEY) as Payload;

    if (!payload) throw new ServiceException(INVALID_TOKEN);

    if (payload.exp * 1000 < new Date().getTime()) {
      throw new ServiceException(TOKEN_EXPIRED);
    }

    req.payload = payload;

    next();
  } catch (error) {
    next(error);
  }
};
