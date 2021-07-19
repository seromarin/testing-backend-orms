import {
  Entity,
  PrimaryKey,
  Property,
  OneToMany,
  Collection,
} from '@mikro-orm/core';
import { Todo } from './Todo.entity';

@Entity()
export class Author {
  @PrimaryKey() id!: number;
  @Property() createdAt = new Date();
  @Property({ onUpdate: () => new Date() }) updatedAt = new Date();
  @Property() name!: string;
  @OneToMany('Todo', 'author') todos = new Collection<Todo>(this);

  constructor(name: string) {
    this.name = name;
  }
}
