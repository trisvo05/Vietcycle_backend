// xulyprofile.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Account } from './account.entity';

@Entity('xulyprofile')
export class XuLyProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  account_id: number;

  @Column({ length: 255 })
  ten_don_vi: string;

  @Column({ length: 255 })
  giay_phep_xu_ly_url: string;

  @Column({ length: 255 })
  dia_chi: string;

  @OneToOne(() => Account, (account) => account.xuLyProfile)
  @JoinColumn({ name: 'account_id' })
  account: Account;
}
