//product type module

import { Module } from '@nestjs/common';
import { ProductTypeController } from './controllers/product-type/prodcut-type.controller';
import { ProductTypeService } from './services/product-type/product-type.service';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { ProductTypeRepositoryToken } from './interfaces/repositories/product-type/product-type.repository.interface';
import { ProductTypeRepository } from './repositories/product-type/product-type.repository';
import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';

@Module({
  controllers: [ProductTypeController],
  providers: [
    CloudinaryService,
    ProductTypeService,
    PrismaService,
    { provide: ProductTypeRepositoryToken, useClass: ProductTypeRepository },
  ],
})
export class ProductModule {}
