import { Injectable } from '@nestjs/common';
import { IProductTypeRepository } from '../../interfaces/repositories/product-type/product-type.repository.interface';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { ProductType } from '../../entities/entitys/product-type/product-type.entity';

@Injectable()
export class ProductTypeRepository implements IProductTypeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(productType: ProductType): Promise<ProductType> {
    const createdProductType = await this.prisma.productType.create({
      data: {
        id: productType.id,
        name: productType.name,
        imageUrl: productType.imageUrl,
      },
    });
    return new ProductType(
      createdProductType.id,
      createdProductType.name,
      createdProductType.imageUrl,
    );
  }

  async findAll(): Promise<ProductType[]> {
    const productTypes = await this.prisma.productType.findMany();
    return productTypes.map(
      (productType) =>
        new ProductType(productType.id, productType.name, productType.imageUrl),
    );
  }
}
