import { ApiProperty } from '@nestjs/swagger';
import { Admin } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateAdminDto
  implements Omit<Admin, 'id' | 'createdAt' | 'updatedAt' | 'hashedPassword'>
{
  @ApiProperty({ description: 'code for create Admin' })
  @IsString()
  @IsNotEmpty()
  code: string;

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
