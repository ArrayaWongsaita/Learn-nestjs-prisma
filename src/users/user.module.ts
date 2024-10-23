import { Module } from '@nestjs/common';
import { UserController } from './adapters/inbounds/user.controller';
import { CreateUserUseCase } from './applications/usecases/createUser.usecase';
import { GetUserByEmailUseCase } from './applications/usecases/getUserByEmail.usecase';
import { UserRepositoryToken } from './applications/ports/user.repository';
import { UserPrismaRepository } from './adapters/outbounds/user.prisma.repository';
import { PrismaModule } from 'src/configs/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    GetUserByEmailUseCase,
    {
      provide: UserRepositoryToken,
      useClass: UserPrismaRepository,
    },
  ],
})
export class UserModule {}
