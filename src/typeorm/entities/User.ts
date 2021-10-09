import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'discord_id' })
  discordId: string;

  @Column()
  email: string;

  @Column({ default: false })
  premium: boolean;
}
