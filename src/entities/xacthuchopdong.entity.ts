// xacthuchopdong.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { HopDongGiaoDich } from './hopdonggiaodich.entity';
import { Account } from './account.entity';

@Entity('xacthuchopdong')
export class XacThucHopDong {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hop_dong_id: number;

  @Column()
  account_id: number;

  @Column({ length: 16 })
  otp_code: string;

  @Column({ type: 'datetime' })
  otp_expired_at: Date;

  @Column({ type: 'tinyint', default: 0 })
  is_verified: boolean;

  @Column({ type: 'datetime', nullable: true })
  verified_at: Date;

  @ManyToOne(() => HopDongGiaoDich)
  @JoinColumn({ name: 'hop_dong_id' })
  hopDong: HopDongGiaoDich;

  @ManyToOne(() => Account)
  @JoinColumn({ name: 'account_id' })
  account: Account;
}
