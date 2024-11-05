// create product dto
// import { ApiProperty } from '@nestjs/swagger';

import { Decimal } from '@prisma/client/runtime/library';
import { Product } from '../entities/product.entity';
import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsString } from 'class-validator';
export class CreateProductDto implements Omit<Product, 'id' | 'imageUrl'> {
  @ApiProperty({ description: 'Name of product' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Base price of product' })
  @IsString()
  @IsNotEmpty()
  basePrice: Decimal;

  @ApiProperty({ description: 'Image url of product' })
  image: any;

  @ApiProperty({ description: 'Product collection id for product' })
  @IsString()
  @IsNotEmpty()
  productCollectionId: string;

  @ApiProperty({ description: 'Product color palette id for product' })
  productColorPaletteId: string;

  @ApiProperty({ description: 'Product material id for product' })
  @IsString()
  @IsNotEmpty()
  productMaterialId: string;
}
