import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { AccountRole } from './entities/account.entity';
// import { Role } from './user.entity';

@Controller('account')
export class AccountController {
  AuthService: any;

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(req) {
    return { msg: 'Trang cá nhân' };
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
