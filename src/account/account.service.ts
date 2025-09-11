import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/entities/account.entity';
import { DoanhNghiepProfile } from 'src/entities/doanhnghiepprofile.entity';
import { VanChuyenProfile } from 'src/entities/vanchuyenprofile.entity';
import { XuLyProfile } from 'src/entities/xulyprofile.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,

    @InjectRepository(DoanhNghiepProfile)
    private doanhnghiepProfileRepository: Repository<DoanhNghiepProfile>,

    @InjectRepository(VanChuyenProfile)
    private vanchuyenProfileRepository: Repository<VanChuyenProfile>,

    @InjectRepository(XuLyProfile)
    private xulyProfileRepository: Repository<XuLyProfile>,


  ) {}

  findByUsername(username: string): Promise<Account> {
    return this.accountRepository.findOne({ where: { username } });
  }

  findById(id: number): Promise<Account> {
    return this.accountRepository.findOne({ where: { id } });
  }

  async getProfile(userId: number) {
    const account = await this.accountRepository.findOne({
      where: { id: userId },
      select: ['id', 'username', 'email','phone' ,'role', 'status'],
    });

    if (!account) {
      throw new NotFoundException('Account not found');
    }

    let profile: any = null;

    switch (account.role) {
      case 'doanhnghiep':
      case 'doanhnghiepmua':
        profile = await this.doanhnghiepProfileRepository.findOne({
          where: { account: { id: userId } },
        });
        break;

      case 'vanchuyen':
        profile = await this.vanchuyenProfileRepository.findOne({
          where: { account: { id: userId } },
        });
        break;

      case 'xuly':
        profile = await this.xulyProfileRepository.findOne({
          where: { account: { id: userId } },
        });
        break;

      case 'admin':
        profile = null; // admin không có profile riêng
        break;
    }

    return {
      ...account,
      profile,
    };
  }


}
