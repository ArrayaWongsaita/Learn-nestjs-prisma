import { IUser } from 'src/users/applications/domains/user.domains';
export interface CreateUserCommand
  extends Omit<
    IUser,
    'hashedPassword' | 'setHashedPassword' | 'comparePassword'
  > {
  password: string;
}
