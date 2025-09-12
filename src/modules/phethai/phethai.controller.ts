import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { PhethaiService } from './phethai.service';
import { CreatePhethaiDto } from './dto/create-phethai.dto';
import { UpdatePhethaiDto } from './dto/update-phethai.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('phethai')
export class PhethaiController {
  constructor(private readonly phethaiService: PhethaiService) {}

  @Post('quan-ly')
  @UseGuards(JwtAuthGuard)
  create(@Body() createPhethaiDto: CreatePhethaiDto, @Req() req) {
    const userId = req.user.userId;
    return this.phethaiService.create(createPhethaiDto, userId);
  }

  // Lấy phế thải của user hiện tại để quản lý 
  @Get('quan-ly')
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
