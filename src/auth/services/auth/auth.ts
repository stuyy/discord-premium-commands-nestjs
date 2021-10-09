import { User } from '../../../typeorm/entities/User';
import { FindUserParams, UserDetails } from '../../../utils/types';

export interface IAuthService {
  validateUser(details: UserDetails): Promise<User>;
  createUser(details: UserDetails): Promise<User>;
  findUser(params: FindUserParams): Promise<User>;
}
