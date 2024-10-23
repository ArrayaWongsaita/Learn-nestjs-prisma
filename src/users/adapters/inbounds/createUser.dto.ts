import { z } from 'zod';
import { IUser } from 'src/users/applications/domains/user.domains';
import { CreateUserSchema } from '../outbounds/user.schema';

export type CreateUserDto = z.infer<typeof CreateUserSchema>;

type OmittedIUserFields =
  | 'id'
  | 'hashedPassword'
  | 'setHashedPassword'
  | 'comparePassword';
export type CreateUserDtoType = Omit<IUser, OmittedIUserFields> & CreateUserDto;
