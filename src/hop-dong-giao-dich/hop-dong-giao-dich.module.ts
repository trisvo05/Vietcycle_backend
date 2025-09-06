import { Module } from '@nestjs/common';
import { HopDongGiaoDichService } from './hop-dong-giao-dich.service';
import { HopDongGiaoDichController } from './hop-dong-giao-dich.controller';

@Module({
  controllers: [HopDongGiaoDichController],
  providers: [HopDongGiaoDichService],
})
export class HopDongGiaoDichModule {}
