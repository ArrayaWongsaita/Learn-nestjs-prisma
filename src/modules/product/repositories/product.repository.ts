// product repository

import { Inject } from '@nestjs/common';
import { PrismaServiceToken } from 'src/common/prisma/prisma.constants';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { IProductRepository } from '../interfaces/product.repository.interface';
import { Product } from '../entities/product.entity';

export class ProductRepository implements IProductRepository {
  constructor(
    @Inject(PrismaServiceToken)
    private readonly prisma: PrismaService,
  ) {}

  async createProduct(product: Product): Promise<Product> {
    return await this.prisma.product.create({
      data: {
        id: product.id,
        name: product.name,
        basePrice: product.basePrice,
        imageUrl: product.imageUrl,
        productCollectionId: product.productCollectionId,
        productColorPaletteId: product.productColorPaletteId,
        productMaterialId: product.productMaterialId,
      },
      select: {
        id: true,
        name: true,
        basePrice: true,
        imageUrl: true,
        productCollectionId: true,
        productColorPaletteId: true,
        productMaterialId: true,
      },
    });
  }

  async findProductByProductCollectionIdAndProductColorPaletteIdAndProductMaterialId(
    productCollectionId: string,
    productColorPaletteId: string,
    productMaterialId: string,
  ): Promise<Product> {
    return await this.prisma.product.findFirst({
      where: {
        productCollectionId,
        productColorPaletteId,
        productMaterialId,
      },
      select: {
        id: true,
        name: true,
        basePrice: true,
        imageUrl: true,
        productCollectionId: true,
        productColorPaletteId: true,
        productMaterialId: true,
      },
    });
  }
}
