// create product material dto
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { ProductMaterial } from '../entities/product-material.entity';

//CreateProductMaterialDto
export class CreateProductMaterialDto implements Omit<ProductMaterial, 'id'> {
  @ApiProperty({
    description: 'Material of product',
  })
  @IsString()
  @IsNotEmpty()
  material: string;

  @ApiProperty({
    description: 'product collection id for product material',
  })
  @IsString()
  @IsNotEmpty()
  productCollectionId: string;

  @ApiProperty({
    description: 'color code of product material',
  })
  @IsString()
  @IsNotEmpty()
  colorCode: string;
}
