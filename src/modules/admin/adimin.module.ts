import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/common/prisma/prisma.module';
import { AdminController } from './controllers/admin.controller';
import { AdminService } from './services/admin.service';
import { AdminRepository } from './repositories/admin.prisma.repository';
import { AdminRepositoryToken } from './interfaces/repositories/admin.repository.interface';

@Module({
  imports: [PrismaModule],
  controllers: [AdminController],
  providers: [
    AdminService,
    {
      provide: AdminRepositoryToken,
      useClass: AdminRepository,
    },
  ],
})
export class AdminModule {}
