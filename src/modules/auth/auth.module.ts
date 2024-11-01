import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from 'src/common/prisma/prisma.module';
import { jwtExpiresIn, jwtSecret } from 'src/config/jwt.config';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from 'src/common/jsonwebtoken/jwtStartegy';
import { AuthController } from './controllers/auth.controller';
import { UserRepository } from '../user/repositories/user.prisma.repository';
import { UserRepositoryToken } from '../user/interfaces/repositories/user.repository.interface';
import { AdminRepositoryToken } from '../admin/interfaces/repositories/admin.repository.interface';
import { AdminRepository } from '../admin/repositories/admin.prsima.repository';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: jwtExpiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [
    JwtStrategy,
    AuthService,
    { provide: UserRepositoryToken, useClass: UserRepository },
    { provide: AdminRepositoryToken, useClass: AdminRepository },
  ],
})
export class AuthModule {}
