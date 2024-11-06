// get product by productCollection id and productColorPalette id and productMaterial id dto

import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../entities/product.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetProductByProductCollectionIdAndProductColorPaletteIdAndProductMaterialIdDto
  implements Omit<Product, 'id' | 'name' | 'basePrice' | 'imageUrl'>
{
  @ApiProperty({ description: 'productCollection for get product' })
  @IsString()
  @IsNotEmpty()
  productCollectionId: string;

  @ApiProperty({ description: 'productColorPaletteId for get product' })
  @IsString()
  @IsNotEmpty()
  productColorPaletteId: string;

  @ApiProperty({ description: 'productMaterialId for get product' })
  @IsString()
  @IsNotEmpty()
  productMaterialId: string;
}
