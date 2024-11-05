import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

//CreateProductSizeDto
export class getProductSizeByProductCollectionIdDto {
  @ApiProperty({
    description: 'product collection id for product size',
  })
  @IsString()
  @IsNotEmpty()
  productCollectionId: string;
}
