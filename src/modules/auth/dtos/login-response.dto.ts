import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({ description: 'username' })
  accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }
}
