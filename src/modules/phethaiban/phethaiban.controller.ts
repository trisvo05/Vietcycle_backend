import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { PhethaibanService } from './phethaiban.service';
import { CreatePhethaibanDto } from './dto/create-phethaiban.dto';
import { UpdatePhethaibanDto } from './dto/update-phethaiban.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('phethaiban')
export class PhethaibanController {
  constructor(private readonly phethaibanService: PhethaibanService) {}

  @Post()
  create(@Body() createPhethaibanDto: CreatePhethaibanDto) {
    return this.phethaibanService.create(createPhethaibanDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getMyPheThaiBan(@Req() req) {
    const userId = req.user.userId; // lấy từ JWT payload
    return this.phethaibanService.getByUserId(userId);
    // return req.user.userId;
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
