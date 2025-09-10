import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { DonViVanChuyenModule } from './don-vi-van-chuyen/don-vi-van-chuyen.module';
import { HopDongGiaoDichModule } from './hop-dong-giao-dich/hop-dong-giao-dich.module';
import { HopDongVanChuyenModule } from './hop-dong-van-chuyen/hop-dong-van-chuyen.module';
import { PheThaiModule } from './phe-thai/phe-thai.module';
// import { Product } from './product/entities/product.entity';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Module Config có thể dùng toàn dự án
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'dauphuthanhkim00',
        database: 'vietcycleconnectv1',
        entities: [__dirname + '/entities/*.entity{.ts,.js}'],
        synchronize: false,
        migrationsRun: false,
      }),
    }),
    ProductModule,
    DonViVanChuyenModule,
    HopDongGiaoDichModule,
    HopDongVanChuyenModule,
    PheThaiModule,
    AccountModule,
    AuthModule,
  ],
})
export class AppModule {}
