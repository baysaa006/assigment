import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { UserEntity } from '@entities/users.entity';
import { ServiceException } from '@common/exceptions';
import { User } from '@common/interfaces';
import { NO_USER, USER_ALREADY_EXIST } from '@common/exceptions';

@Service()
@EntityRepository()
export class UserService extends Repository<UserEntity> {
  public async findAllUser(): Promise<User[]> {
    const users: User[] = await UserEntity.find();
    return users;
  }

  public async findUserById(userId: number): Promise<User> {
    const findUser: User = await UserEntity.findOne({ where: { id: userId } });

    if (!findUser) throw new ServiceException(NO_USER);

    return findUser;
  }

  public async createUser(userData: User): Promise<User> {
    const findUser: User = await UserEntity.findOne({ where: { email: userData.email } });
    if (findUser) throw new ServiceException(USER_ALREADY_EXIST);

    const createUserData: User = await UserEntity.create({ ...userData }).save();

    return createUserData;
  }

  public async updateUser(userId: number, userData: User): Promise<User> {
    const findUser: User = await UserEntity.findOne({ where: { id: userId } });
    if (!findUser) throw new ServiceException(NO_USER);

    await UserEntity.update(userId, { ...userData });

    const updateUser: User = await UserEntity.findOne({ where: { id: userId } });
    return updateUser;
  }

  public async deleteUser(userId: number): Promise<User> {
    const findUser: User = await UserEntity.findOne({ where: { id: userId } });
    if (!findUser) throw new ServiceException(NO_USER);

    await UserEntity.delete({ id: userId });
    return findUser;
  }
}
