import { Module } from '@nestjs/common';
import { DonViVanChuyenService } from './don-vi-van-chuyen.service';
import { DonViVanChuyenController } from './don-vi-van-chuyen.controller';

@Module({
  controllers: [DonViVanChuyenController],
  providers: [DonViVanChuyenService],
})
export class DonViVanChuyenModule {}
