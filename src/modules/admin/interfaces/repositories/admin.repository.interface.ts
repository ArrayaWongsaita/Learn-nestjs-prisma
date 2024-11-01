import { Admin } from '../../entities/entitys/admin.entitys';

const AdminRepository: unique symbol = Symbol('AdminRepository');
export const AdminRepositoryToken = AdminRepository.toString();

// admin repository interface
export interface IAdminRepository {
  create(admin: Admin): Promise<Admin>;
  findByEmail(email: string): Promise<Admin | null>;
  // findById(id: string): Promise<Admin | null>;
  // update(admin: Admin): Promise<Admin>;
}
