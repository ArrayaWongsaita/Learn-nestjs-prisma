import {
  Controller,
  Post,
  Body,
  Version,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';

import { LoginDto } from '../dtos/login.dto';
import { AuthService } from '../services/auth.service';
import { LoginResponseDto } from '../dtos/login-response.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Version('1')
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Login user' })
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    const accessToken = await this.authService.login(loginDto);
    return new LoginResponseDto(accessToken);
  }

  @Post('login-admin')
  @Version('1')
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Login admin' })
  async loginAdmin(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    const accessToken = await this.authService.loginAdmin(loginDto);
    return new LoginResponseDto(accessToken);
  }
}
