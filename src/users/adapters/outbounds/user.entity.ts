import { IUser } from '../../applications/domains/user.domains';

export interface UserEntity
  extends Omit<IUser, 'id' | 'comparePassword' | 'setHashedPassword'> {
  id?: number;
}
