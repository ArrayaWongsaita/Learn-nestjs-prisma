// product-color-palette repository interface

import { ProductColorPalette } from '../entities/product-color-palette.entity';

const ProductColorPaletteRepository: unique symbol = Symbol(
  'ProductColorPaletteRepositoryToken',
);
export const ProductColorPaletteRepositoryToken =
  ProductColorPaletteRepository.toString();

export interface ProductColorPaletteRepositoryInterface {
  createProductColorPalette(
    data: ProductColorPalette,
  ): Promise<ProductColorPalette>;
  getAllProductColorPalettes(): Promise<ProductColorPalette[]>;
  getAllProductColorPaletteBypProductCollectionId(
    id: string,
  ): Promise<ProductColorPalette[]>;
  getProductColorPaletteById(id: string): Promise<ProductColorPalette>;
  getProductColorPaletteByName(name: string): Promise<ProductColorPalette>;
  getProductColorPalettes(): Promise<ProductColorPalette[]>;
  updateProductColorPalette(
    id: string,
    data: {
      name?: string;
      imageUrl?: string;
      colorCode?: string;
      productCollectionId?: number;
    },
  ): Promise<ProductColorPalette>;
  deleteProductColorPalette(id: string): Promise<ProductColorPalette>;
}
