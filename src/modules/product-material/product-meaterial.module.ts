import { Module } from '@nestjs/common';
import { ProductMaterialController } from './controllers/product-material.controller';
import { ProductMaterialService } from './services/product-material.service';
import { ProductMaterialRepositoryToken } from './interfaces/product-material.repository.interface';
import { PrismaServiceToken } from 'src/common/prisma/prisma.constants';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { ProductMaterialRepository } from './repositories/product-material.repository';

@Module({
  controllers: [ProductMaterialController],
  providers: [
    ProductMaterialService,
    {
      provide: ProductMaterialRepositoryToken,
      useClass: ProductMaterialRepository,
    },
    {
      provide: PrismaServiceToken,
      useClass: PrismaService,
    },
  ],
})
export class ProductMaterialModule {}
