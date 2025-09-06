import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PheThaiService } from './phe-thai.service';
import { CreatePheThaiDto } from './dto/create-phe-thai.dto';
import { UpdatePheThaiDto } from './dto/update-phe-thai.dto';

@Controller('phe-thai')
export class PheThaiController {
  constructor(private readonly pheThaiService: PheThaiService) {}

  @Post()
  create(@Body() createPheThaiDto: CreatePheThaiDto) {
    return this.pheThaiService.create(createPheThaiDto);
  }

  @Get()
  findAll() {
    return this.pheThaiService.findAll(

    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pheThaiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePheThaiDto: UpdatePheThaiDto) {
    return this.pheThaiService.update(+id, updatePheThaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pheThaiService.remove(+id);
  }
}
