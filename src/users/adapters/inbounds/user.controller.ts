import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { CreateUserUseCase } from 'src/users/applications/usecases/createUser.usecase';
import { ValidationPipe } from '../../../pipe/validation.pipe';
import { CreateUserSchema } from '../outbounds/user.schema';
import { CreateUserDto } from './createUser.dto';
import { GetUserByEmailUseCase } from 'src/users/applications/usecases/getUserByEmail.usecase';
import { CreateUserCommand } from 'src/users/applications/usecases/commands/createUser.commend';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly GetUserByEmailUseCase: GetUserByEmailUseCase,
  ) {}

  @Post('create')
  @UsePipes(new ValidationPipe(CreateUserSchema))
  create(@Body() createUserDto: CreateUserDto) {
    const command: CreateUserCommand = {
      username: createUserDto.username,
      email: createUserDto.email,
      password: createUserDto.password,
    };
    console.log('command', command);
    return this.createUserUseCase.execute(command);
  }
}
