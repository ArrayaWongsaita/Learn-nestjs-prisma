import {
  Controller,
  Post,
  Body,
  Version,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserResponse } from '../dtos/user-response.dto';
import { UserService } from '../services/user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Version('1')
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'create user' })
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserResponse> {
    const user = await this.userService.createUser(createUserDto);
    return new UserResponse(user);
  }
}
