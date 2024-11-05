import { Module } from '@nestjs/common';
import { ProductSizeController } from './controllers/product-size.controller';
import { ProductSizeService } from './services/product-size.service';
import { PrismaServiceToken } from 'src/common/prisma/prisma.constants';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { ProductSizeRepositoryToken } from './interfaces/product-size.repository.interface';
import { ProductSizeRepository } from './repositories/product-size.repository';

@Module({
  controllers: [ProductSizeController],
  providers: [
    ProductSizeService,
    {
      provide: PrismaServiceToken,
      useClass: PrismaService,
    },
    {
      provide: ProductSizeRepositoryToken,
      useClass: ProductSizeRepository,
    },
  ],
})
export class ProductSizeModule {}
