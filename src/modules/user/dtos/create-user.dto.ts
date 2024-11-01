import { z } from 'zod';
import { CreateUserSchema } from '../schemas/create-user.schema';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto implements z.infer<typeof CreateUserSchema> {
  @ApiProperty({ description: 'username' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: 'email' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'password' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ description: 'confirmPassword' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  confirmPassword: string;
}
