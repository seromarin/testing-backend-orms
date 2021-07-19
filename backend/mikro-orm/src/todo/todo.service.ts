import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Todo } from 'src/entities/Todo.entity';
import { Observable, from, of } from 'rxjs';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: EntityRepository<Todo>,
  ) {}

  findAll(): Observable<Todo[]> {
    return from(this.todoRepository.findAll());
  }

  findOne(id: string): Observable<Todo> {
    return from(this.todoRepository.findOne({ id: Number(id) }));
  }

  create(task: string): Observable<Todo> {
    return of(this.todoRepository.create(new Todo(task)));
  }
}
