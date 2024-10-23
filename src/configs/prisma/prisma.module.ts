// src/configs/prisma.module.ts
import { Module, Global } from '@nestjs/common';
import prisma, { PrismaToken } from './prisma.config';

@Global()
@Module({
  providers: [
    {
      provide: PrismaToken,
      useValue: prisma,
    },
  ],
  exports: [PrismaToken],
})
export class PrismaModule {}
