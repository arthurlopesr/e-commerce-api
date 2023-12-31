import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // criando usuário
  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUser);
  }

  // buscando usuário
  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getAllUser();
  }
}
