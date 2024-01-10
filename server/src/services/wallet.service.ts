import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { UserEntity } from '@entities/users.entity';
import { NO_WALLET, ServiceException, WALLET_EXIST } from '@common/exceptions';
import { User, Wallet } from '@common/interfaces';
import { NO_USER, USER_ALREADY_EXIST } from '@common/exceptions';
import { WalletEntity } from '@/entities/wallet.entity';

@Service()
@EntityRepository()
export class WalletService extends Repository<WalletEntity> {
  public async findAllWallet(): Promise<Wallet[]> {
    const wallets: Wallet[] = await WalletEntity.find();
    return wallets;
  }

  public async getWallet(address: number): Promise<Wallet> {
    const wallet: Wallet = await WalletEntity.findOne({ where: { address } });

    if (!wallet) throw new ServiceException(NO_WALLET);

    return wallet;
  }

  public async createWallet(address: string): Promise<Wallet> {
    let wallet = await WalletEntity.findOne({ where: { address: address } });

    if (wallet) return;

    wallet = new WalletEntity();
    wallet.address = address;
    wallet = await wallet.save();

    return wallet;
  }
}
