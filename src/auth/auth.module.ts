import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
// import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
// import { JwtStrategy } from './jwt.strategy';
import { AccountModule } from 'src/account/account.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    AccountModule,
    JwtModule.register({
      secret: 'SECRET_KEY', // ⚠️ đổi thành env variable
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
