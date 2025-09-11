import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "https://vietcycle-backend-3.onrender.com", // cho phép frontend truy cập
    credentials: true,               // nếu bạn có dùng cookie/session
  });

  await app.listen(1000);
}
bootstrap();

