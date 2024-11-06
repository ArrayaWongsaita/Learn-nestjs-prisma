// product material repository interface
import { ProductMaterial } from '../entities/product-material.entity';
const productMaterialRepository: unique symbol = Symbol(
  'ProductMaterialRepositoryInterface',
);
export const ProductMaterialRepositoryToken = productMaterialRepository;
export interface ProductMaterialRepositoryInterface {
  createProductMaterial(
    productMaterial: ProductMaterial,
  ): Promise<ProductMaterial>;
  getProductMaterialByProductCollectionId(
    productCollectionId: string,
  ): Promise<ProductMaterial[]>;
}
