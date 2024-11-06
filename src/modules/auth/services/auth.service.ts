import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepositoryToken } from 'src/modules/user/interfaces/repositories/user.repository.interface';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dtos/login.dto';
import { UserRepository } from 'src/modules/user/repositories/user.prisma.repository';
import { AdminRepositoryToken } from 'src/modules/admin/interfaces/repositories/admin.repository.interface';
import { AdminRepository } from 'src/modules/admin/repositories/admin.prisma.repository';
import { ROLES } from 'src/shared/constants/roles.constants';
@Injectable()
export class AuthService {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: UserRepository,
    @Inject(AdminRepositoryToken)
    private readonly adminRepository: AdminRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login({ email, password }: LoginDto): Promise<string> {
    const user = await this.userRepository.findByEmail(email);
    if (!user || !(await compare(password, user.hashedPassword))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.id, email: user.email, role: ROLES.USER };
    return this.jwtService.sign(payload);
  }

  async loginAdmin({ email, password }: LoginDto): Promise<string> {
    const admin = await this.adminRepository.findByEmail(email);
    if (!admin || !(await compare(password, admin.hashedPassword))) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const payload = { sub: admin.id, email: admin.email, role: ROLES.ADMIN };
    return this.jwtService.sign(payload);
  }
}
