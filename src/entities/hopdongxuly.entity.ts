// hopdongxuly.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Account } from './account.entity';

@Entity('hopdongxuly')
export class HopDongXuLy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  don_vi_thue_xu_ly_id: number;

  @Column()
  don_vi_xu_ly_id: number;

  @Column('text')
  thong_tin: string;

  @Column({ length: 255 })
  hop_dong_url: string;

  @Column({
    type: 'enum',
    enum: ['cho_ky', 'co_hieu_luc'],
  })
  status: string;

  @ManyToOne(() => Account)
  @JoinColumn({ name: 'don_vi_thue_xu_ly_id' })
  donViThueXuLy: Account;

  @ManyToOne(() => Account)
  @JoinColumn({ name: 'don_vi_xu_ly_id' })
  donViXuLy: Account;
}
