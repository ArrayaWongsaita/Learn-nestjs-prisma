// product repository interface
import { Product } from '../entities/product.entity';

const ProductRepository: unique symbol = Symbol('IProductRepository');
export const ProductRepositoryToken = ProductRepository.toString();

export interface IProductRepository {
  createProduct(product: Product): Promise<Product>;
  findProductByProductCollectionIdAndProductColorPaletteIdAndProductMaterialId(
    productCollectionId: string,
    productColorPaletteId: string,
    productMaterialId: string,
  ): Promise<Product>;
  // listProducts(): Promise<Product[]>;
  // updateProduct(product: Product): Promise<Product>;
  // deleteProduct(id: string): Promise<void>;
}
