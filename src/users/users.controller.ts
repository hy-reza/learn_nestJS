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
} from '@nestjs/common';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(200)
  @Header('Content-type', 'application/json')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('/:id')
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
}
