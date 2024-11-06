import { ProductCollection as prismaProductCollection } from '@prisma/client';
import { ProductColorPalette } from 'src/modules/product-color-palette/entities/product-color-palette.entity';
import { ProductMaterial } from 'src/modules/product-material/entities/product-material.entity';
import { ProductSize } from 'src/modules/product-size/entities/product-size.entity';

export type IProductCollectionAndDetails = Omit<
  prismaProductCollection,
  'createdAt' | 'updatedAt'
> & {
  ProductMaterial: ProductMaterial[];
  ProductColorPalette: ProductColorPalette[];
  ProductSize: ProductSize[];
};
