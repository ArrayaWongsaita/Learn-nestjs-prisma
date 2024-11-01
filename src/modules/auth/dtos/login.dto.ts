import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'email for login' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'email for login' })
  password: string;
}
