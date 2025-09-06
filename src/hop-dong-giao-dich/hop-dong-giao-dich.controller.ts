import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HopDongGiaoDichService } from './hop-dong-giao-dich.service';
import { CreateHopDongGiaoDichDto } from './dto/create-hop-dong-giao-dich.dto';
import { UpdateHopDongGiaoDichDto } from './dto/update-hop-dong-giao-dich.dto';

@Controller('hop-dong-giao-dich')
export class HopDongGiaoDichController {
  constructor(private readonly hopDongGiaoDichService: HopDongGiaoDichService) {}

  @Post()
  create(@Body() createHopDongGiaoDichDto: CreateHopDongGiaoDichDto) {
    return this.hopDongGiaoDichService.create(createHopDongGiaoDichDto);
  }

  @Get()
  findAll() {
    return this.hopDongGiaoDichService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hopDongGiaoDichService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHopDongGiaoDichDto: UpdateHopDongGiaoDichDto) {
    return this.hopDongGiaoDichService.update(+id, updateHopDongGiaoDichDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hopDongGiaoDichService.remove(+id);
  }
}
