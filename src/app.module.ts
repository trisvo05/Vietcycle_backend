import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

// import { Product } from './product/entities/product.entity';
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

    // post login , auth và get profile từng role từng người dùng 
    AccountModule,
    AuthModule,
    PhethaiModule,
    PhethaibanModule,
    HopdonggiaodichModule,
  ],
})
export class AppModule {}
