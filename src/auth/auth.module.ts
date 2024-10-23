import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtExpiresIn, jwtSecret } from 'src/configs/jwt.config';
import { AuthController } from './adapters/inbounds/auth.controller';
import { JwtStrategy } from './jwtStartegy';
import { LoginUseCase } from './applications/usecase/login.usecase';
import { UserRepositoryToken } from 'src/users/applications/ports/user.repository';
import { UserPrismaRepository } from 'src/users/adapters/outbounds/user.prisma.repository';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: jwtExpiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [
    JwtStrategy,
    LoginUseCase,
    {
      provide: UserRepositoryToken,
      useClass: UserPrismaRepository,
    },
  ],
})
export class AuthModule {}
