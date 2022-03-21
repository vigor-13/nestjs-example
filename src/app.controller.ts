import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test-email')
  sendTestMail(): any {
    return this.appService.sendTestMail();
  }

  @Get('/test-email2')
  sendTestMail2(): any {
    return this.appService.sendTestMail2();
  }
}
