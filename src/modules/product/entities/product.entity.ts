// product entity
import { Product as prismaProduct } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

export class Product implements Omit<prismaProduct, 'createdAt' | 'updatedAt'> {
  name: string;
  id: string;
  basePrice: Decimal;
  imageUrl: string;
  productCollectionId: string;
  productColorPaletteId: string;
  productMaterialId: string;
}
