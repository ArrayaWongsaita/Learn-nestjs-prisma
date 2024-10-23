import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { LoginUseCase } from '../../applications/usecase/login.usecase';
import { LoginDto } from './login.dto';
import { LoginSchema } from '../schemas/login.schema';
import { ValidationPipe } from 'src/pipe/validation.pipe';
import { LoginCommand } from 'src/auth/applications/usecase/command/login.command';

@Controller()
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}
  @Post('login')
  @UsePipes(new ValidationPipe(LoginSchema))
  async login(@Body() loginDto: LoginDto) {
    const command: LoginCommand = {
      email: loginDto.email,
      password: loginDto.password,
    }
    const accessToken = await this.loginUseCase.execute(command);
    return { accessToken };
  }
}
