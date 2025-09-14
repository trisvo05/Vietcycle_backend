import { Controller, Post, Body, Get, Req, UseGuards } from '@nestjs/common';
import { HopdonggiaodichService } from './hopdonggiaodich.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
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



  //  Xem hop dong giao dich cua minh theo payload.userId
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    const userId = req.user.userId;
    console.log("user id from tokken",userId)
    return this.hopDongService.findAll(userId);
    
  }
}
