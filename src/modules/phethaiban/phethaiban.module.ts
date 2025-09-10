import { Module } from '@nestjs/common';
import { PhethaibanService } from './phethaiban.service';
import { PhethaibanController } from './phethaiban.controller';
import { PheThaiBan } from 'src/entities/phethaiban.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PheThaiBan])],
  controllers: [PhethaibanController],
  providers: [PhethaibanService],
})
export class PhethaibanModule {}
