// get product by productCollection id and productColorPalette id and productMaterial id dto

import { Product } from '../entities/product.entity';

export class GetProductByProductCollectionIdAndProductColorPaletteIdAndProductMaterialIdDto
  implements Omit<Product, 'id' | 'name' | 'basePrice' | 'imageUrl'>
{
  productCollectionId: string;
  productColorPaletteId: string;
  productMaterialId: string;
}
