import { User } from '../entities/entitys/user.entity';

export class UserResponse {
  id: string;
  email: string;
  username: string;

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.username = user.username;
  }
}
