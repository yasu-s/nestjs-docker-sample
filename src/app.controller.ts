import { Controller, Get } from '@nestjs/common';
import { SystemConfig } from './system.config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hoge')
  getHoge(): string {
    return SystemConfig.HOGE;
  }
}
