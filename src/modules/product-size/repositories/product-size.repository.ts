import { PrismaService } from 'src/common/prisma/prisma.service';
import { ProductSize } from '../entities/product-size.entity';
import { ProductSizeRepositoryInterface } from '../interfaces/product-size.repository.interface';
import { Inject } from '@nestjs/common';
import { PrismaServiceToken } from 'src/common/prisma/prisma.constants';

export const productSizeSelect = {
  id: true,
  size: true,
  gender: true,
  productCollectionId: true,
};
export class ProductSizeRepository implements ProductSizeRepositoryInterface {
  constructor(
    @Inject(PrismaServiceToken)
    private readonly prisma: PrismaService,
  ) {}

  async create(productSize: ProductSize): Promise<ProductSize> {
    return await this.prisma.productSize.create({
      data: {
        id: productSize.id,
        size: productSize.size,
        gender: productSize.gender,
        productCollectionId: productSize.productCollectionId,
      },
      select: productSizeSelect,
    });
  }

  async findByProductCollectionId(
    productCollectionId: string,
  ): Promise<ProductSize[]> {
    return await this.prisma.productSize.findMany({
      where: {
        productCollectionId,
      },
      select: productSizeSelect,
    });
  }
}
