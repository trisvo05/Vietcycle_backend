import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('phethaiban')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64 })
  phe_thai_id: string;

  @Column({ type: 'text', nullable: true })
  mo_ta: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  khoi_luong_ban: string;
}
