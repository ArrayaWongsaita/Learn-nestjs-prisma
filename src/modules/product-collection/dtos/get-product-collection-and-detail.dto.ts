import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class getProductCollectionAndDetailDto {
  @ApiProperty({
    description: 'CollectionId for get product collection and detail',
  })
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  collectionId: string;
}
