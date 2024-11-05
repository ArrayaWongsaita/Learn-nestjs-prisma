// product-size repository interface

import { ProductSize } from '../entities/product-size.entity';

const ProductSizeRepository: unique symbol = Symbol(
  'ProductSizeRepositoryInterface',
);
export const ProductSizeRepositoryToken = ProductSizeRepository.toString();

export interface ProductSizeRepositoryInterface {
  // find all product sizes
  // findAll(): Promise<ProductSize[]>;
  // find product size by id
  // findById(id: string): Promise<ProductSize | null>;
  // create product size
  create(productSize: ProductSize): Promise<ProductSize>;
  findByProductCollectionId(
    productCollectionId: string,
  ): Promise<ProductSize[]>;
  // update product size
  // update(): Promise<ProductSize>;
  // delete product size
  // delete(id: string): Promise<boolean>;
}
