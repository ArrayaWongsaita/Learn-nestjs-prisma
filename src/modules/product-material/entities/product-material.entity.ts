// product material entity
import { ProductMaterial as prismaProductMaterial } from '@prisma/client';
export class ProductMaterial
  implements Omit<prismaProductMaterial, 'createdAt' | 'updatedAt'>
{
  id: string;
  colorCode: string;
  material: string;
  productCollectionId: string;
}
