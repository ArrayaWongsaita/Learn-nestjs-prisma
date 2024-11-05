// product-size entity
import { ProductSize as prismaProductSize } from '@prisma/client';

export class ProductSize
  implements Omit<prismaProductSize, 'createdAt' | 'updatedAt'>
{
  id: string;
  gender: 'MEN' | 'FEMALE';
  size: number;
  productCollectionId: string;
}
