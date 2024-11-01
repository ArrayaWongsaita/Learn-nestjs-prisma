import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { ProductType as prismaProductType } from '@prisma/client';
export class CreateProductTypeDto
  implements
    Omit<prismaProductType, 'id' | 'createdAt' | 'updatedAt' | 'imageUrl'>
{
  @ApiProperty({ description: 'name for create product type' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'image for create product type' })
  image: any;
}
