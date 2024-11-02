import { ProductColorPalette as prismaProductColorPalette } from '@prisma/client';

export class ProductColorPalette
  implements Omit<prismaProductColorPalette, 'createdAt' | 'updatedAt'>
{
  constructor(
    public id: string,
    public name: string,
    public colorCode: string,
    public productCollectionId: string,
  ) {}
}
