import { Inject, Injectable } from '@nestjs/common';
import { UserRepository, UserRepositoryToken } from '../ports/user.repository';
import { IUser } from '../domains/user.domains';

@Injectable()
export class GetUserByEmailUseCase {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: UserRepository,
  ) {}

  async execute(email: string): Promise<IUser> {
    return await this.userRepository.findByEmail(email);
  }
}
