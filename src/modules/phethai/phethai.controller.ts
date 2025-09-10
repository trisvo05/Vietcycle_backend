import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { PhethaiService } from './phethai.service';
import { CreatePhethaiDto } from './dto/create-phethai.dto';
import { UpdatePhethaiDto } from './dto/update-phethai.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('phethai')
export class PhethaiController {
  constructor(private readonly phethaiService: PhethaiService) {}

  @Post()
  create(@Body() createPhethaiDto: CreatePhethaiDto) {
    return this.phethaiService.create(createPhethaiDto);
  }

  // Lấy phế thải của user hiện tại
  @Get()
  @UseGuards(JwtAuthGuard)
  async getByUserId(@Req() req) {
    const userId = req.user.userId; // từ JwtStrategy
    return this.phethaiService.getByUserId(userId);
    // kiem tra lai payload va debug nhanh :((
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
