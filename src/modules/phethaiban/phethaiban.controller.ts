import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { PhethaibanService } from './phethaiban.service';
import { CreatePhethaibanDto } from './dto/create-phethaiban.dto';
import { UpdatePhethaibanDto } from './dto/update-phethaiban.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('phethaiban')
export class PhethaibanController {
  constructor(private readonly phethaibanService: PhethaibanService) {}

  @Post("quan-ly")
  create(@Body() createPhethaibanDto: CreatePhethaibanDto) {
    return this.phethaibanService.create(createPhethaibanDto);
  }
  // Lấy phế thải bán cho QUẢN LÝ PHẾ THẢI BÁN (role Doanh nghiệp)
  @Get("quan-ly")
  @UseGuards(JwtAuthGuard)
  async getMyPheThaiBan(@Req() req) {
    const userId = req.user.userId; // lấy từ JWT payload
    return this.phethaibanService.getByUserId(userId);
    // return req.user.userId;
  }



  // Lấy phế thải bán cho trang SẢN PHẨM PHẾ THẢI  (role user , người mua )

  @Get()
  async getPheThaiBanPublic() {
    return this.phethaibanService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phethaibanService.findOne(+id);
  }

  @Patch('quan-ly/:id')
  update(@Param('id') id: string, @Body() updatePhethaibanDto: UpdatePhethaibanDto) {
    return this.phethaibanService.update(+id, updatePhethaibanDto);
  }

  @Delete('quan-ly/:id')
  remove(@Param('id') id: string) {
    return this.phethaibanService.remove(+id);
  }
}
