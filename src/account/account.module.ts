import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/entities/account.entity';
import { DoanhNghiepProfile } from 'src/entities/doanhnghiepprofile.entity';
import { VanChuyenProfile } from 'src/entities/vanchuyenprofile.entity';
import { XuLyProfile } from 'src/entities/xulyprofile.entity';
// import { Account } from './entities/account.entity';
// import { AccountController } from './account.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Account,DoanhNghiepProfile,VanChuyenProfile, XuLyProfile])],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService],
})
export class AccountModule {}
