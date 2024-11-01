import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/common/prisma/prisma.module';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.prisma.repository';
import { UserRepositoryToken } from './interfaces/repositories/user.repository.interface';
import { UserService } from './services/user.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserRepositoryToken,
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}
