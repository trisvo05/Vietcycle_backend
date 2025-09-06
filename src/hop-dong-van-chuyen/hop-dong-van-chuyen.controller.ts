import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HopDongVanChuyenService } from './hop-dong-van-chuyen.service';
import { CreateHopDongVanChuyenDto } from './dto/create-hop-dong-van-chuyen.dto';
import { UpdateHopDongVanChuyenDto } from './dto/update-hop-dong-van-chuyen.dto';

@Controller('hop-dong-van-chuyen')
export class HopDongVanChuyenController {
  constructor(private readonly hopDongVanChuyenService: HopDongVanChuyenService) {}

  @Post()
  create(@Body() createHopDongVanChuyenDto: CreateHopDongVanChuyenDto) {
    return this.hopDongVanChuyenService.create(createHopDongVanChuyenDto);
  }

  @Get()
  findAll() {
    return this.hopDongVanChuyenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hopDongVanChuyenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHopDongVanChuyenDto: UpdateHopDongVanChuyenDto) {
    return this.hopDongVanChuyenService.update(+id, updateHopDongVanChuyenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hopDongVanChuyenService.remove(+id);
  }
}
