/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';
import { ProductColorPaletteRepositoryInterface } from '../interfaces/product-color-palette.repository.interface';
import { PrismaServiceToken } from 'src/common/prisma/prisma.constants';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { ProductColorPalette } from '@prisma/client';

@Injectable()
export class ProductColorPaletteRepository
  implements ProductColorPaletteRepositoryInterface
{
  constructor(
    @Inject(PrismaServiceToken)
    private readonly prisma: PrismaService,
  ) {}
  async createProductColorPalette(
    data: ProductColorPalette,
  ): Promise<ProductColorPalette> {
    return await this.prisma.productColorPalette.create({
      data: {
        id: data.id,
        name: data.name,
        colorCode: data.colorCode,
        productCollectionId: data.productCollectionId,
      },
    });
  }
  async getAllProductColorPaletteBypProductCollectionId(
    productCollectionId: string,
  ): Promise<ProductColorPalette[]> {
    return await this.prisma.productColorPalette.findMany({
      where: {
        productCollectionId: productCollectionId,
      },
    });
  }
  getAllProductColorPalettes(): Promise<any[]> {
    throw new Error('Method not implemented.');
  }
  getProductColorPaletteById(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getProductColorPaletteByName(name: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getProductColorPalettes(): Promise<any[]> {
    throw new Error('Method not implemented.');
  }
  updateProductColorPalette(
    id: string,
    data: {
      name?: string;
      imageUrl?: string;
      colorCode?: string;
      productCollectionId?: number;
    },
  ): Promise<any> {
    throw new Error('Method not implemented.');
  }
  deleteProductColorPalette(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
