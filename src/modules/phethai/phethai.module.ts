import { Module } from '@nestjs/common';
import { PhethaiService } from './phethai.service';
import { PhethaiController } from './phethai.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PheThai } from 'src/entities/phethai.entity';
// import { Phethai } from './entities/phethai.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PheThai])], // <-- Đăng ký entity ở đây
  controllers: [PhethaiController],
  providers: [PhethaiService],
})
export class PhethaiModule {}
