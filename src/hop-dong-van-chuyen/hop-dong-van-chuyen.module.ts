import { Module } from '@nestjs/common';
import { HopDongVanChuyenService } from './hop-dong-van-chuyen.service';
import { HopDongVanChuyenController } from './hop-dong-van-chuyen.controller';

@Module({
  controllers: [HopDongVanChuyenController],
  providers: [HopDongVanChuyenService],
})
export class HopDongVanChuyenModule {}
