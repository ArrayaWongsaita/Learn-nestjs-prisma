import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class getAllProductColorPaletteByProductCollectionIdDto {
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  @ApiProperty({
    description:
      'product collection id for get all product color palette by product collection id',
  })
  productCollectionId: string;
}
