import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonViVanChuyenService } from './don-vi-van-chuyen.service';
import { CreateDonViVanChuyenDto } from './dto/create-don-vi-van-chuyen.dto';
import { UpdateDonViVanChuyenDto } from './dto/update-don-vi-van-chuyen.dto';

@Controller('don-vi-van-chuyen')
export class DonViVanChuyenController {
  constructor(private readonly donViVanChuyenService: DonViVanChuyenService) {}

  @Post()
  create(@Body() createDonViVanChuyenDto: CreateDonViVanChuyenDto) {
    return this.donViVanChuyenService.create(createDonViVanChuyenDto);
  }

  @Get()
  findAll() {
    return this.donViVanChuyenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donViVanChuyenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonViVanChuyenDto: UpdateDonViVanChuyenDto) {
    return this.donViVanChuyenService.update(+id, updateDonViVanChuyenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donViVanChuyenService.remove(+id);
  }
}
