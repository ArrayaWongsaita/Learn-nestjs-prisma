import { ProductCollection as prismaProductCollection } from '@prisma/client';

export class ProductCollection
  implements Omit<prismaProductCollection, 'createdAt' | 'updatedAt'>
{
  constructor(
    public id: string,
    public name: string,
    public imageUrl: string,
    public productTypeId: string,
  ) {}
}
