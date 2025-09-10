import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/entities/account.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private usersRepository: Repository<Account>,
  ) {}

  findByUsername(username: string): Promise<Account> {
    return this.usersRepository.findOne({ where: { username } });
  }

  findById(id: number): Promise<Account> {
    return this.usersRepository.findOne({ where: { id } });
  }

  // Lấy thông tin profile account 
    async getProfile(userId: number) {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      select: ['id', 'email','username','role'], 
    });

    if (!user) {
      throw new NotFoundException('Không tìm thấy người dùng');
    }

    return user;
  }
}
