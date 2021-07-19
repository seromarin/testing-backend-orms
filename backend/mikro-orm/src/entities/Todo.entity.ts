import { Entity, Property, ManyToOne, PrimaryKey } from '@mikro-orm/core';
import { Author } from './Author.entity';

@Entity()
export class Todo {
  @PrimaryKey() id!: number;
  @Property() task!: string;
  @Property() isCompleted = false;
  @Property() createdAt = new Date();
  @Property({ onUpdate: () => new Date() }) updatedAt = new Date();
  @ManyToOne() author!: Author;

  constructor(task: string) {
    this.task = task;
  }
}
