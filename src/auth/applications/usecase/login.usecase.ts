import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  UserRepository,
  UserRepositoryToken,
} from 'src/users/applications/ports/user.repository';
import { LoginCommand } from './command/login.command';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute(command: LoginCommand): Promise<string> {
    const { email, password } = command;
    const user = await this.userRepository.findByEmail(email);
    const isPasswordCorrect = await user?.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Invalid user or password');
    }

    const payload = { email: user?.email, sub: user?.id };
    return this.jwtService.sign(payload);
  }
}
