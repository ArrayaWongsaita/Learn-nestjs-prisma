import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEnum, IsNumber } from 'class-validator';

//CreateProductSizeDto
export class CreateProductSizeDto {
  @ApiProperty({
    description: 'Size of product',
  })
  @IsNumber()
  @IsNotEmpty()
  size: number;

  @ApiProperty({
    description: 'gender for product size',
  })
  @IsEnum(['MEN', 'FEMALE'])
  @IsString()
  @IsNotEmpty()
  gender: 'MEN' | 'FEMALE';

  @ApiProperty({
    description: 'product collection id for product size',
  })
  @IsString()
  @IsNotEmpty()
  productCollectionId: string;
}
