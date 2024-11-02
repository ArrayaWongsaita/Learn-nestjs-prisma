import { ProductType } from '../../entities/entitys/product-type.entity';

//product type repository interface
const ProductTypeRepository: unique symbol = Symbol('ProductTypeRepository');
export const ProductTypeRepositoryToken = ProductTypeRepository.toString();

export interface IProductTypeRepository {
  create(productType: ProductType): Promise<ProductType>;
  findAll(): Promise<ProductType[]>;
  // findByName(name: string): Promise<ProductType | null>;
  // findById(id: string): Promise<ProductType | null>;
  // update(productType: ProductType): Promise<ProductType>;
  // delete(id: string): Promise<void>;
}
