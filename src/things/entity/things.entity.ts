import {
  Entity,
  Unique,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('things')
@Unique(['id'])
export class Things extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  website: string;

  @Column()
  userid: number;

  @Column()
  description: string;

  @Column()
  keywords: string;
}
