import { Module } from '@nestjs/common';

import { ProductController } from './controllers/product.controller';
import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';
import { ProductService } from './services/product.service';
import { ProductRepositoryToken } from './interfaces/product.repository.interface';
import { ProductRepository } from './repositories/product.repository';
import { PrismaServiceToken } from 'src/common/prisma/prisma.constants';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  controllers: [ProductController],
  providers: [
    CloudinaryService,
    ProductService,
    {
      provide: ProductRepositoryToken,
      useClass: ProductRepository,
    },
    {
      provide: PrismaServiceToken,
      useClass: PrismaService,
    },
  ],
})
export class ProductModule {}
