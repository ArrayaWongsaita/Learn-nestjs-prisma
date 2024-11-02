import { ApiProperty } from '@nestjs/swagger';
import { ProductCollection as prismaProductCollection } from '@prisma/client';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class createProductCollectionDto
  implements
    Omit<
      prismaProductCollection,
      'id' | 'imageUrl' | 'createdAt' | 'updatedAt'
    >
{
  @ApiProperty({ description: 'name for create product collection' })
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'image file for create product collection' })
  image: any;

  @ApiProperty({ description: 'productTypeId for product collection' })
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  productTypeId: string;
}
