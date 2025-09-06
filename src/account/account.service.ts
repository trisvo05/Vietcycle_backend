import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { User } from './user.entity';
import { Account } from './entities/account.entity';

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
}
