import { NestFactory } from '@nestjs/core';

import { SystemConfig } from '@sample/constants/system.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(SystemConfig.PORT);
}
bootstrap();
