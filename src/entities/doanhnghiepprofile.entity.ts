// src/entities/doanhnghiepprofile.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Account } from './account.entity';

@Entity('doanhnghiepprofile')
export class DoanhNghiepProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  account_id: number;

  @Column({ length: 255 })
  ten_doanh_nghiep: string;

  @Column({ length: 50 })
  ma_so_thue: string;

  @Column({ length: 255 })
  dia_chi: string;

  @Column({ length: 255 })
  giay_phep_kinh_doanh_url: string;

  @OneToOne(() => Account, (account) => account.doanhNghiepProfile)
  @JoinColumn({ name: 'account_id' })
  account: Account;
}
