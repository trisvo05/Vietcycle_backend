import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhethaibanService } from './phethaiban.service';
import { CreatePhethaibanDto } from './dto/create-phethaiban.dto';
import { UpdatePhethaibanDto } from './dto/update-phethaiban.dto';

@Controller('phethaiban')
export class PhethaibanController {
  constructor(private readonly phethaibanService: PhethaibanService) {}

  @Post()
  create(@Body() createPhethaibanDto: CreatePhethaibanDto) {
    return this.phethaibanService.create(createPhethaibanDto);
  }

  @Get()
  findAll() {
    return this.phethaibanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phethaibanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhethaibanDto: UpdatePhethaibanDto) {
    return this.phethaibanService.update(+id, updatePhethaibanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phethaibanService.remove(+id);
  }
}
