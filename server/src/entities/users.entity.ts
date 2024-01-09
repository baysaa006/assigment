import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, OneToMany, Index } from 'typeorm';
import { User, Wallet } from '@common/interfaces';
import { WalletEntity } from './wallet.entity';

@Entity()
@Index('idx_user_01', ['email'])
@Index('idx_phone_02', ['phone'])
export class UserEntity extends BaseEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  phone: string;

  @OneToMany(() => WalletEntity, wallet => wallet.user)
  wallets: Wallet[];

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
