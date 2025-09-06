import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';
import { AccountService } from 'src/account/account.service';
// import { AccountService } from 'src/account/account.service';
// import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: AccountService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (!user || user.password_hash !== pass) {
      throw new UnauthorizedException('Sai tài khoản hoặc mật khẩu');
    }

    const { password_hash, ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
