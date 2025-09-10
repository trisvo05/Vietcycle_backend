// hopdonggiaodich.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PheThai } from './phethai.entity';
import { Account } from './account.entity';

@Entity('hopdonggiaodich')
export class HopDongGiaoDich {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phe_thai_id: string;

  @Column()
  nguoi_mua_id: number;

  @Column()
  nguoi_ban_id: number;

  @Column('text')
  thong_tin: string;

  @Column({ length: 255 })
  hop_dong_url: string;

  @Column({
    type: 'enum',
    enum: ['cho_ky', 'co_hieu_luc'],
  })
  status: string;

  @ManyToOne(() => PheThai, (phethai) => phethai.hopDongGiaoDich)
  @JoinColumn({ name: 'phe_thai_id' })
  pheThai: PheThai;

  @ManyToOne(() => Account)
  @JoinColumn({ name: 'nguoi_mua_id' })
  nguoiMua: Account;

  @ManyToOne(() => Account)
  @JoinColumn({ name: 'nguoi_ban_id' })
  nguoiBan: Account;
}
