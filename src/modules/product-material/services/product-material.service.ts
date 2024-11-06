// product material service

import { Inject, Injectable } from '@nestjs/common';
import { ProductMaterial } from '../entities/product-material.entity';
import {
  ProductMaterialRepositoryInterface,
  ProductMaterialRepositoryToken,
} from '../interfaces/product-material.repository.interface';
import { Builder } from 'builder-pattern';
import { v7 as uuidV7 } from 'uuid';
import { CreateProductMaterialDto } from '../dtos/create-product-material.dto';
@Injectable()
export class ProductMaterialService {
  constructor(
    @Inject(ProductMaterialRepositoryToken)
    private readonly productMaterialRepository: ProductMaterialRepositoryInterface,
  ) {}

  async createProductMaterial({
    material,
    productCollectionId,
    colorCode,
  }: CreateProductMaterialDto): Promise<ProductMaterial> {
    const productMaterial = Builder(ProductMaterial)
      .id(uuidV7())
      .material(material)
      .productCollectionId(productCollectionId)
      .colorCode(colorCode)
      .build();
    return await this.productMaterialRepository.createProductMaterial(
      productMaterial,
    );
  }

  async getProductMaterialByProductCollectionId(
    productCollectionId: string,
  ): Promise<ProductMaterial[]> {
    return await this.productMaterialRepository.getProductMaterialByProductCollectionId(
      productCollectionId,
    );
  }
}
