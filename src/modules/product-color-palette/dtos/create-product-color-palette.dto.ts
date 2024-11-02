import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ProductColorPalette } from '@prisma/client';

// create product-color-palette dto
export class CreateProductColorPaletteDto
  implements Omit<ProductColorPalette, 'id' | 'createdAt' | 'updatedAt'>
{
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  @ApiProperty({ description: 'name for create product color palette' })
  name: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  @ApiProperty({ description: 'color code for create product color palette' })
  colorCode: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  @ApiProperty({ description: 'color code for create product color palette' })
  productCollectionId: string;
}
