import { sign, verify } from 'jsonwebtoken';
import { Service } from 'typedi';
import { EntityRepository, Repository } from 'typeorm';
import { SECRET_KEY } from '@config';
import { UserEntity } from '@entities/users.entity';
import { INVALID_ADDRESS, INVALID_TOKEN, NO_ADDRESS, ServiceException } from '@common/exceptions';
import { Payload, TokenData, User } from '@common/interfaces';
import { USER_ALREADY_EXIST } from '@common/exceptions';
import { v4 as uuidv4 } from 'uuid';
import Web3 from 'web3';
import { createToken, getMessage } from '@/utils/functions';

@Service()
@EntityRepository()
export class AuthService extends Repository<UserEntity> {
  private readonly web3: Web3;

  constructor() {
    super();
    this.web3 = new Web3('https://cloudflare-eth.com/');
  }

  public async createNonce(address: string): Promise<{ tempToken: string; message: string }> {
    if (!address) throw new ServiceException(NO_ADDRESS);

    const nonce = uuidv4();
    const tempToken = sign({ address, nonce }, SECRET_KEY, { expiresIn: '60s' });
    const message = getMessage(nonce, address);
    return { tempToken, message };
  }

  public async verifySignature(payload: Payload, signature: string) {
    const { address, nonce } = payload;

    const message = getMessage(nonce, address);

    const verifiedAddress = await this.web3.eth.accounts.recover(message, signature);

    if (!verifiedAddress) throw new ServiceException(INVALID_ADDRESS);

    if (verifiedAddress.toLowerCase() === address.toLowerCase()) {
      const token = sign({ address: verifiedAddress, signature }, SECRET_KEY, { expiresIn: '1d' });
      return token;
    } else {
      throw new ServiceException(INVALID_ADDRESS);
    }
  }

  public async decodeToken(token: string): Promise<Payload> {
    return new Promise((resolve, reject) => {
      verify(token, SECRET_KEY, (err, decoded) => {
        if (!err) {
          resolve(decoded as Payload);
        } else {
          reject(new ServiceException(INVALID_TOKEN));
        }
      });
    });
  }

  public async signup(userData: User): Promise<User> {
    const findUser: User = await UserEntity.findOne({ where: { email: userData.email } });
    if (findUser) throw new ServiceException(USER_ALREADY_EXIST);

    const createUserData: User = await UserEntity.create({ ...userData }).save();
    return createUserData;
  }
}
