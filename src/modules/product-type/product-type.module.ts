//product type module

import { Module } from '@nestjs/common';
import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';
import { ProductTypeController } from './controllers/prodcut-type.controller';
import { ProductTypeService } from './services/product-type.service';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { ProductTypeRepositoryToken } from './interfaces/repositories/product-type.repository.interface';
import { ProductTypeRepository } from './repositories/product-type.repository';

@Module({
  controllers: [ProductTypeController],
  providers: [
    CloudinaryService,
    ProductTypeService,
    PrismaService,
    { provide: ProductTypeRepositoryToken, useClass: ProductTypeRepository },
  ],
})
export class ProductTypeModule {}
