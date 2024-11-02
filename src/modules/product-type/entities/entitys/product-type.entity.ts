import { ProductType as prismaProductType } from '@prisma/client';

export class ProductType
  implements Omit<prismaProductType, 'createdAt' | 'updatedAt'>
{
  constructor(
    public id: string,
    public name: string,
    public imageUrl: string,
  ) {}
}
