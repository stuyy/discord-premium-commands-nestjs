import { User } from '../typeorm/entities/User';

export type UserDetails = {
  discordId: string;
  email: string;
};

export type FindUserParams = Partial<{
  id: number;
  discordId: string;
  email: string;
}>;

export type Done = (err: Error, user: User) => void;
