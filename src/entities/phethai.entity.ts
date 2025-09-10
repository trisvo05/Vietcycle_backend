// phethai.entity.ts
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { PheThaiBan } from './phethaiban.entity';
import { HopDongGiaoDich } from './hopdonggiaodich.entity';

@Entity('phethai')
export class PheThai {
  @PrimaryColumn({ length: 64 })
  id: string;

  @Column({ length: 255 })
  ten: string;

  @Column({
    type: 'enum',
    enum: ['ran', 'long', 'nguy_hai', 'khac'],
  })
  loai: string;

  @Column({ length: 100 })
  khoi_luong: string;

  @Column({ type: 'date' })
  ngay_phat_sinh: Date;

  @Column({ length: 255 })
  dia_diem_phat_sinh: string;

    @Column({ type: 'float', nullable: true })
  kinh_do: number;  // thêm trường Kinh độ

    @Column({ type: 'float', nullable: true })
  vi_do: number;  // thêm trường Kinh độ
  @Column({ length: 255 })
  phuong_phap_xu_ly: string;

  @Column({
    type: 'enum',
    enum: ['chua_xu_ly', 'dang_xu_ly', 'da_xu_ly'],
  })
  trang_thai_xu_ly: string;

  @OneToMany(() => PheThaiBan, (ban) => ban.pheThai)
  pheThaiBans: PheThaiBan[];

  @OneToMany(() => HopDongGiaoDich, (hd) => hd.pheThai)
  hopDongGiaoDich: HopDongGiaoDich[];
}
