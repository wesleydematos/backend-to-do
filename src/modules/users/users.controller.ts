import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('signup')
  async signup(@Body() body: { email: string; password: string }) {
    return this.usersService.createUser(body);
  }

  @Get()
  async findAllUsers() {
    return this.usersService.findAllUsers();
  }
}
