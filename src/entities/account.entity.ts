// account.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { VanChuyenProfile } from './vanchuyenprofile.entity';
import { XuLyProfile } from './xulyprofile.entity';
import { DoanhNghiepProfile } from './doanhnghiepprofile.entity';
export enum AccountRole {
  DOANHNGHIEP = 'doanhnghiep',
  DOANHNGHIEPMUA = 'doanhnghiepmua',
  VANCHUYEN = 'vanchuyen',
  XULY = 'xuly',
  ADMIN = 'admin',
}
export enum AccountStatus {
  ACTIVE = 'active',
  PENDING = 'pending',
}
@Entity('account')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 255 })
  password_hash: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 20 })
  phone: string;

  @Column({
    type: 'enum',
    enum: AccountRole,
    default: AccountRole.DOANHNGHIEP,

  })
  role: AccountRole;

  @Column({
    type: 'enum',
    enum: AccountStatus,
    default: AccountStatus.PENDING,
  })
  status: AccountStatus;

  @OneToOne(() => DoanhNghiepProfile, (profile) => profile.account)
  doanhNghiepProfile: DoanhNghiepProfile;

  @OneToOne(() => VanChuyenProfile, (profile) => profile.account)
  vanChuyenProfile: VanChuyenProfile;

  @OneToOne(() => XuLyProfile, (profile) => profile.account)
  xuLyProfile: XuLyProfile;
}
