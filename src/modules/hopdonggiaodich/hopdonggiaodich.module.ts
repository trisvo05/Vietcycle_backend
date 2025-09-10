import { Module } from '@nestjs/common';
import { HopdonggiaodichService } from './hopdonggiaodich.service';
import { HopdonggiaodichController } from './hopdonggiaodich.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HopDongGiaoDich } from 'src/entities/hopdonggiaodich.entity';
// import { Hopdonggiaodich } from './entities/hopdonggiaodich.entity';

@Module({
  imports : [TypeOrmModule.forFeature([HopDongGiaoDich])],
  controllers: [HopdonggiaodichController],
  providers: [HopdonggiaodichService],
})
export class HopdonggiaodichModule {}
