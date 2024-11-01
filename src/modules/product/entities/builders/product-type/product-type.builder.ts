import { ProductType } from '../../entitys/product-type/product-type.entity';

export class ProductTypeBuilder implements ProductType {
  id: string;
  name: string;
  imageUrl: string;
}
