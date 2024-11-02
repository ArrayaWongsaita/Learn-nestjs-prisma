// product collection repository interface
import { ProductCollection } from '../../entities/entitys/product-collection.entity';

const ProductCollectionRepository: unique symbol = Symbol(
  'ProductCollectionRepository',
);
export const ProductCollectionRepositoryToken =
  ProductCollectionRepository.toString();

export interface ProductCollectionRepositoryInterface {
  createProductCollection(data: ProductCollection): Promise<ProductCollection>;

  getAllProductCollections(): Promise<ProductCollection[]>;

  getProductCollectionById(id: number): Promise<ProductCollection>;

  getProductCollectionByName(name: string): Promise<ProductCollection>;

  getProductCollections(): Promise<ProductCollection[]>;

  updateProductCollection(
    id: number,
    data: {
      name?: string;
      description?: string;
      imageUrl?: string;
      productTypeId?: number;
    },
  ): Promise<ProductCollection>;

  deleteProductCollection(id: number): Promise<ProductCollection>;
}
