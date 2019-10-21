import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { SystemConfig } from '@sample/constants/system.config';
import { AppModule } from './app.module';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Logger.debug(`PORT: ${SystemConfig.PORT}`, 'bootstrap');
  await app.listen(SystemConfig.PORT);
}
bootstrap();
