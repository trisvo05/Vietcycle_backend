import { Controller, Post, Body, Get } from '@nestjs/common';
import { HopdonggiaodichService } from './hopdonggiaodich.service';
// import { HopDongService } from './hopdong.service';

@Controller('hop-dong-giao-dich')
export class HopdonggiaodichController {
  constructor(private readonly hopDongService: HopdonggiaodichService) {}

  @Post('tao')
  async taoHopDong(@Body() body: any) {
    return this.hopDongService.taoHopDong(body);
  }

  @Post('xac-thuc')
  async xacThucOtp(@Body() body: { hopDongId: number; accountId: number; otp: string }) {
    return this.hopDongService.xacThucOtp(body.hopDongId, body.accountId, body.otp);
  }
  @Get()
  findAll() {
    return this.hopDongService.findAll();
  }
}
