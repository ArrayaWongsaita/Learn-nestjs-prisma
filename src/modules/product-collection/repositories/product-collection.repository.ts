/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductCollectionRepositoryInterface } from '../interfaces/repositories/product-collection.repository.interface';
import { ProductCollection } from '../entities/entitys/product-collection.entity';
import { Inject } from '@nestjs/common';
import { PrismaServiceToken } from 'src/common/prisma/prisma.constants';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { ProductCollectionAndDetails } from '../entities/entitys/product-collection-and-details.entity';
import { selectProductMaterial } from 'src/modules/product-material/repositories/product-material.repository';
import { productColorPaletteSelect } from 'src/modules/product-color-palette/repositories/product-color-palette.repository';
import { productSizeSelect } from 'src/modules/product-size/repositories/product-size.repository';

export const ProductCollectionSelect = {
  id: true,
  name: true,
  imageUrl: true,
  productTypeId: true,
};
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
  async getProductCollectionAndDetailById(
    id: string,
  ): Promise<ProductCollectionAndDetails> {
    return await this.prisma.productCollection.findUnique({
      where: { id },
      select: {
        ...ProductCollectionSelect,
        ProductMaterial: { select: selectProductMaterial },
        ProductColorPalette: { select: productColorPaletteSelect },
        ProductSize: { select: productSizeSelect },
      },
    });
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
