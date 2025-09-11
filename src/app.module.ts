import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { PhethaiModule } from './modules/phethai/phethai.module';
import { PhethaibanModule } from './modules/phethaiban/phethaiban.module';
import { HopdonggiaodichModule } from './modules/hopdonggiaodich/hopdonggiaodich.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Module Config có thể dùng toàn dự án
    }),
    
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
      console.log('DB_USER:', config.get('DB_USER'));
      console.log('DB_PASS:', config.get('DB_PASS'));
      return {
        type: 'mysql',
        host: config.get<string>('DB_HOST'),
        port: parseInt(config.get<string>('DB_PORT'), 10),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_DATABASE'),
        entities: [__dirname + '/entities/*.entity{.ts,.js}'],
        synchronize: false,
      };
    }

    }),


    // post login , auth và get profile từng role từng người dùng 
    AccountModule,
    AuthModule,
    PhethaiModule,
    PhethaibanModule,
    HopdonggiaodichModule,
  ],
})
export class AppModule {}
