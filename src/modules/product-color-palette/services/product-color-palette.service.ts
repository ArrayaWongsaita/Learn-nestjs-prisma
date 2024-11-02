import { Inject, Injectable } from '@nestjs/common';
import {
  ProductColorPaletteRepositoryInterface,
  ProductColorPaletteRepositoryToken,
} from '../interfaces/product-color-palette.repository.interface';
import { Builder } from 'builder-pattern';
import { v7 as uuidv7 } from 'uuid';
import { ProductColorPalette } from '../entities/product-color-palette.entity';

@Injectable()
export class ProductColorPaletteService {
  constructor(
    @Inject(ProductColorPaletteRepositoryToken)
    private readonly productColorPaletteRepository: ProductColorPaletteRepositoryInterface,
  ) {}

  async createProductColorPalette({
    name,
    colorCode,
    productCollectionId,
  }: Omit<ProductColorPalette, 'id'>): Promise<ProductColorPalette> {
    const productColorPalette = Builder(ProductColorPalette)
      .id(uuidv7())
      .name(name)
      .colorCode(colorCode)
      .productCollectionId(productCollectionId)
      .build();
    return this.productColorPaletteRepository.createProductColorPalette(
      productColorPalette,
    );
  }

  async getAllProductColorPaletteByProductCollectionId(
    productCollectionId: string,
  ): Promise<ProductColorPalette[]> {
    const allProductColorPalette =
      await this.productColorPaletteRepository.getAllProductColorPaletteBypProductCollectionId(
        productCollectionId,
      );
    return allProductColorPalette.map((productColorPalette) =>
      Builder(ProductColorPalette)
        .id(productColorPalette.id)
        .name(productColorPalette.name)
        .colorCode(productColorPalette.colorCode)
        .productCollectionId(productColorPalette.productCollectionId)
        .build(),
    );
  }
}
