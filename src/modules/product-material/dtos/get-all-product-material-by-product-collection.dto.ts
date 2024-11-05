// get product material by product collection id

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetAllProductMaterialByProductCollectionDto {
  @ApiProperty({
    description: 'product collection id for product material',
  })
  @IsString()
  @IsNotEmpty()
  productCollectionId: string;
}
