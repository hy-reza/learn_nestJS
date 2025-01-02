import { Users } from 'src/entities/users.interface';
import { UsersService } from './../users/users.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Response, Request } from 'express';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  @HttpCode(200)
  @Header('Content-type', 'application/json')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('/search/:id')
  @HttpCode(200)
  @Header('Content-type', 'application/json')
  getUserById(@Param('id') id: number) {
    return this.usersService.getUserById(id);
  }

  @Post()
  @HttpCode(200)
  @Header('Content-type', 'application/json')
  createUser(@Body() newUser: Users) {
    return this.usersService.createUser(newUser);
  }

  @Put('/:id')
  @HttpCode(200)
  @Header('Content-type', 'application/json')
  updateUser(@Body() updatedUser: Users, @Param('id') id: number) {
    return this.usersService.updateUser(updatedUser, id);
  }

  @Delete('/:id')
  @HttpCode(200)
  @Header('Content-type', 'application/json')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }

  @Get('/setCookie')
  setCookie(@Res() response: Response, @Query('name') name: string): void {
    response.cookie('name', name);
    response.status(200);
    response.send(`Hallo ${name}`);
  }

  @Get('/getCookie')
  @HttpCode(200)
  getCookie(@Req() request: Request): string {
    return request.cookies['name']
      ? `${request.cookies['name']}?`
      : 'Tidak ada kue !';
  }
}
