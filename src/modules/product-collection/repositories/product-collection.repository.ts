/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductCollectionRepositoryInterface } from '../interfaces/repositories/product-collection.repository.interface';
import { ProductCollection } from '../entities/entitys/product-collection.entity';
import { Inject } from '@nestjs/common';
import { PrismaServiceToken } from 'src/common/prisma/prisma.constants';
import { PrismaService } from 'src/common/prisma/prisma.service';

export class ProductCollectionRepository
  implements ProductCollectionRepositoryInterface
{
  constructor(
    @Inject(PrismaServiceToken)
    private readonly prisma: PrismaService,
  ) {}

  async createProductCollection(
    data: ProductCollection,
  ): Promise<ProductCollection> {
    const createdProductCollection = await this.prisma.productCollection.create(
      {
        data: {
          id: data.id,
          name: data.name,
          imageUrl: data.imageUrl,
          productTypeId: data.productTypeId,
        },
      },
    );
    return new ProductCollection(
      createdProductCollection.id,
      createdProductCollection.name,
      createdProductCollection.imageUrl,
      createdProductCollection.productTypeId,
    );
  }
  getAllProductCollections(): Promise<ProductCollection[]> {
    return this.prisma.productCollection.findMany();
  }
  getProductCollectionById(id: number): Promise<ProductCollection> {
    throw new Error('Method not implemented.');
  }
  getProductCollectionByName(name: string): Promise<ProductCollection> {
    throw new Error('Method not implemented.');
  }
  getProductCollections(): Promise<ProductCollection[]> {
    throw new Error('Method not implemented.');
  }
  updateProductCollection(
    id: number,
    data: {
      name?: string;
      description?: string;
      imageUrl?: string;
      productTypeId?: number;
    },
  ): Promise<ProductCollection> {
    throw new Error('Method not implemented.');
  }
  deleteProductCollection(id: number): Promise<ProductCollection> {
    throw new Error('Method not implemented.');
  }
}
