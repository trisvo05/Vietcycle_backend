import { Module } from '@nestjs/common';
import { PheThaiService } from './phe-thai.service';
import { PheThaiController } from './phe-thai.controller';

@Module({
  controllers: [PheThaiController],
  providers: [PheThaiService],
  // exports: [PheThaiService],
})
export class PheThaiModule {}
