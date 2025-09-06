import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  @Column({ type: 'varchar', length: 50, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 255 })
  password_hash: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
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
}
