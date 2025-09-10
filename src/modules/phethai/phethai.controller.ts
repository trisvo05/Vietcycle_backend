import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhethaiService } from './phethai.service';
import { CreatePhethaiDto } from './dto/create-phethai.dto';
import { UpdatePhethaiDto } from './dto/update-phethai.dto';

@Controller('phethai')
export class PhethaiController {
  constructor(private readonly phethaiService: PhethaiService) {}

  @Post()
  create(@Body() createPhethaiDto: CreatePhethaiDto) {
    return this.phethaiService.create(createPhethaiDto);
  }

  @Get()
  findAll() {
    return this.phethaiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phethaiService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhethaiDto: UpdatePhethaiDto) {
    return this.phethaiService.update(id, updatePhethaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phethaiService.remove(id);
  }
}
