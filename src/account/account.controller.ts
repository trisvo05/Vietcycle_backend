import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
// import { AccountRole } from './entities/account.entity';
import { AccountService } from './account.service';
import { AccountRole } from 'src/entities/account.entity';
// import { Role } from './user.entity';

@Controller('account')
export class AccountController {
  constructor(private readonly AccountService: AccountService) {}

  AuthService: any;

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req) {
    const userId = req.user.sub; // lấy từ payload trong JwtStrategy
    return this.AccountService.getProfile(userId);
    // return { "usserID " : userId };
  }

  @Get('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(AccountRole.ADMIN)
  getAdminPage() {
    return { msg: 'Chỉ admin mới thấy' };
  }

  @Get('doanhnghiep')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(AccountRole.DOANHNGHIEP)
  getDoanhNghiepPage() {
    return { msg: 'Chỉ doanh nghiệp mới thấy' };
  }
}
