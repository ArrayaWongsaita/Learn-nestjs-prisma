import { IUser } from '../../domains/user.domains';

export type GetUserByUsernameQuery = Pick<IUser, 'username'>;
