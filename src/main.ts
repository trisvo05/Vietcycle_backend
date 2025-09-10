import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "http://localhost:3000", // cho phép frontend truy cập
    credentials: true,               // nếu bạn có dùng cookie/session
  });

  await app.listen(1000);
}
bootstrap();

