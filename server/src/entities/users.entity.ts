import { IsNotEmpty } from 'class-validator';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Index,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User, Wallet } from '@common/interfaces';
import { WalletEntity } from './wallet.entity';

@Entity()
@Index('idx_user_01', ['name'])
@Index('idx_user_02', ['address'])
export class UserEntity extends BaseEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  bio: string;

  @Column({ type: 'varchar', nullable: true })
  phone: string;

  @OneToOne(() => WalletEntity, wallet => wallet.user, { cascade: true })
  @JoinColumn()
  wallet: WalletEntity;

  @Column({ type: 'varchar', nullable: false })
  address: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
