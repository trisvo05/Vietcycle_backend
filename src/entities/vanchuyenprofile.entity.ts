// vanchuyenprofile.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Account } from './account.entity';

@Entity('vanchuyenprofile')
export class VanChuyenProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  account_id: number;

  @Column({ length: 255 })
  ten_don_vi: string;

  @Column({ length: 100 })
  so_dang_ky_van_tai: string;

  @Column({ length: 255 })
  khu_vuc_van_chuyen: string;

  @Column({ length: 255 })
  dia_chi: string;

  @OneToOne(() => Account, (account) => account.vanChuyenProfile)
  @JoinColumn({ name: 'account_id' })
  account: Account;
}
