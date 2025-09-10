// phethaiban.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { PheThai } from './phethai.entity';
import { HopDongGiaoDich } from './hopdonggiaodich.entity';

@Entity('phethaiban')
export class PheThaiBan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phe_thai_id: string;

  @Column('text')
  mo_ta: string;

  @Column({ length: 100 })
  khoi_luong_ban: string;

  @ManyToOne(() => PheThai, (phethai) => phethai.pheThaiBans)
  @JoinColumn({ name: 'phe_thai_id' })
  pheThai: PheThai;

    @OneToMany(() => HopDongGiaoDich, (hd) => hd.pheThaiBan)
  hopDongGiaoDich: HopDongGiaoDich[];
}
