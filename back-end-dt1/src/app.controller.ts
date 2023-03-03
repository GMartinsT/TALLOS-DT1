import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHello(): string {
    return String(process.env.NODE_ENV);
  }

  @Get('xuxu')
  getXuxu(): string {
    return String('xuxa')
  }
}
