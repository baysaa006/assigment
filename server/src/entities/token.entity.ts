import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, OneToMany, Index, ManyToOne } from 'typeorm';
import { Token } from '@/interfaces/token.interface';
import { WalletEntity } from './wallet.entity';

@Entity()
@Index('idx_token_01', ['ticker'])
export class TokenEntity extends BaseEntity implements Token {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => WalletEntity, { nullable: false })
  wallet: WalletEntity;

  @Column({ type: 'varchar', nullable: false })
  ticker: string;

  @Column({ type: 'int4', nullable: true })
  balance: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
