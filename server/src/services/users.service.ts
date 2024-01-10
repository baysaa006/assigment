import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { UserEntity } from '@entities/users.entity';
import { ServiceException } from '@common/exceptions';
import { User, UserInput } from '@common/interfaces';
import { NO_USER } from '@common/exceptions';

@Service()
@EntityRepository()
export class UserService extends Repository<UserEntity> {
  public async findUserByName(name: string) {
    const findUser = await UserEntity.findOne({ where: { name: name } });

    if (!findUser) return false;
    else return true;
  }

  public async findUserByAdrress(address: string) {
    const findUser = await UserEntity.findOne({ where: { address } });

    if (!findUser) return false;
    else return findUser;
  }

  public async updateUser(userId: number, userData: UserInput): Promise<User> {
    const findUser: User = await UserEntity.findOne({ where: { id: userId } });
    if (!findUser) throw new ServiceException(NO_USER);

    await UserEntity.update(userId, { ...userData });

    const updateUser: User = await UserEntity.findOne({ where: { id: userId } });
    return updateUser;
  }
}
