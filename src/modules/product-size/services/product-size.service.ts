import { Inject, Injectable } from '@nestjs/common';
import {
  ProductSizeRepositoryInterface,
  ProductSizeRepositoryToken,
} from '../interfaces/product-size.repository.interface';
import { ProductSize } from '../entities/product-size.entity';
import { Builder } from 'builder-pattern';
import { v7 as uuidV7 } from 'uuid';
@Injectable()
export class ProductSizeService {
  constructor(
    @Inject(ProductSizeRepositoryToken)
    private readonly productSizeRepository: ProductSizeRepositoryInterface,
  ) {}

  async createProductSize({
    gender,
    size,
    productCollectionId,
  }: Omit<ProductSize, 'id'>): Promise<ProductSize> {
    const productSize = Builder(ProductSize)
      .id(uuidV7())
      .gender(gender)
      .size(size)
      .productCollectionId(productCollectionId)
      .build();
    return await this.productSizeRepository.create(productSize);
  }
  getProductSizeByProductCollectionId(productCollectionId: string) {
    return this.productSizeRepository.findByProductCollectionId(
      productCollectionId,
    );
  }
}
