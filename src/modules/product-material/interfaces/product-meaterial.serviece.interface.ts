import { ProductMaterial } from '../entities/product-material.entity';

// product meaterial service interface
export interface IProductMaterialService {
  createProductMaterial(
    productMaterial: Omit<ProductMaterial, 'id'>,
  ): Promise<ProductMaterial>;
  getProductMaterialByProductCollectionId(
    productCollectionId: string,
  ): Promise<ProductMaterial[]>;
}
