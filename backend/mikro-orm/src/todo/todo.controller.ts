import { Controller, Get, Body, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Todo } from 'src/entities/Todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): Observable<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body('task') task: string): Observable<Todo> {
    return this.todoService.create(task);
  }
}
