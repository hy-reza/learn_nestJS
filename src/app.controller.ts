import { Controller, Get, Render, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(@Req() req: Request): any {
    this.appService.getHello();
    return { message: `Hello ${req.cookies['name'] || 'There!!'}!` };
  }
}
