// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DonViVanChuyenModule } from './don-vi-van-chuyen/don-vi-van-chuyen.module';
import { HopDongGiaoDichModule } from './hop-dong-giao-dich/hop-dong-giao-dich.module';
import { HopDongVanChuyenModule } from './hop-dong-van-chuyen/hop-dong-van-chuyen.module';
import { PheThaiModule } from './phe-thai/phe-thai.module';
import { Product } from './product/entities/product.entity';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProductModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1' ,
      port:3306,
      username:'root',
      password: 'dauphuthanhkim00',
      database: 'vietcycleconnectv1',
      entities: [Product, __dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrationsRun:false,
    }),
    ConfigModule.forRoot({
      isGlobal: true, // Giúp module config được dùng toàn cục
    }),
    DonViVanChuyenModule,
    HopDongGiaoDichModule,
    HopDongVanChuyenModule,
    PheThaiModule,
    AccountModule,
    AuthModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
