import { Module } from '@nestjs/common';
import { ProductCollectionController } from './controllers/product-collection.controller';
import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';
import { ProductCollectionService } from './services/product-collection.service';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { ProductCollectionRepositoryToken } from './interfaces/repositories/product-collection.repository.interface';
import { ProductCollectionRepository } from './repositories/product-collection.repository';
import { PrismaServiceToken } from 'src/common/prisma/prisma.constants';

@Module({
  controllers: [ProductCollectionController],
  providers: [
    CloudinaryService,
    ProductCollectionService,
    {
      provide: PrismaServiceToken,
      useClass: PrismaService,
    },
    {
      provide: ProductCollectionRepositoryToken,
      useClass: ProductCollectionRepository,
    },
  ],
})
export class ProductCollectionModule {}
