import { BaseEntity, Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, Index, PrimaryGeneratedColumn } from 'typeorm';
import { Wallet, Token } from '@common/interfaces';
import { UserEntity } from './users.entity';
import { TokenEntity } from './token.entity';

export enum WalletType {
  METAMASK = 'METAMASK',
  PHANTOM = 'PHANTOM',
  TRUST = 'TRUST',
}

@Entity()
@Index('idx_waller_01', ['address'])
export class WalletEntity extends BaseEntity implements Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, { nullable: true })
  user: UserEntity;

  @Column({ type: 'varchar', nullable: false })
  address: string;

  @Column({ type: 'varchar', nullable: true })
  chainId: string;

  @Column({ type: 'varchar', nullable: false })
  type: WalletType;

  @OneToMany(() => TokenEntity, token => token.wallet)
  tokens: Token[];

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
