// product material repository
import { Inject } from '@nestjs/common';
import { PrismaServiceToken } from 'src/common/prisma/prisma.constants';
import { PrismaService } from 'src/common/prisma/prisma.service';

export const selectProductMaterial = {
  id: true,
  colorCode: true,
  material: true,
  productCollectionId: true,
};
export class ProductMaterialRepository {
  constructor(
    @Inject(PrismaServiceToken)
    private readonly prisma: PrismaService,
  ) {}
  async createProductMaterial(productMaterial) {
    return await this.prisma.productMaterial.create({
      data: {
        id: productMaterial.id,
        material: productMaterial.material,
        colorCode: productMaterial.colorCode,
        productCollectionId: productMaterial.productCollectionId,
      },
      select: selectProductMaterial,
    });
  }

  async getProductMaterialByProductCollectionId(productCollectionId) {
    return await this.prisma.productMaterial.findMany({
      where: {
        productCollectionId,
      },
      select: selectProductMaterial,
    });
  }
}
