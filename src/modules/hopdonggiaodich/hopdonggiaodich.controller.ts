import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HopdonggiaodichService } from './hopdonggiaodich.service';
import { CreateHopdonggiaodichDto } from './dto/create-hopdonggiaodich.dto';
import { UpdateHopdonggiaodichDto } from './dto/update-hopdonggiaodich.dto';

@Controller('hopdonggiaodich')
export class HopdonggiaodichController {
  constructor(private readonly hopdonggiaodichService: HopdonggiaodichService) {}

  @Post()
  create(@Body() createHopdonggiaodichDto: CreateHopdonggiaodichDto) {
    return this.hopdonggiaodichService.create(createHopdonggiaodichDto);
  }

  @Get()
  findAll() {
    return this.hopdonggiaodichService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.hopdonggiaodichService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateHopdonggiaodichDto: UpdateHopdonggiaodichDto) {
    return this.hopdonggiaodichService.update(+id, updateHopdonggiaodichDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.hopdonggiaodichService.remove(+id);
  }
}
