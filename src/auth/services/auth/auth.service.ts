import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../typeorm/entities/User';
import { FindUserParams, UserDetails } from '../../../utils/types';
import { IAuthService } from './auth';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async validateUser(details: UserDetails) {
    const { discordId } = details;
    const user = await this.userRepository.findOne({ discordId });
    return user ? user : this.createUser(details);
  }

  createUser(details: UserDetails) {
    const user = this.userRepository.create(details);
    return this.userRepository.save(user);
  }

  findUser(params: FindUserParams) {
    return this.userRepository.findOne(params);
  }
}
