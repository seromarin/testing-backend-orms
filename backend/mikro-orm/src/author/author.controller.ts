import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Observable } from 'rxjs';
import { Author } from 'src/entities/Author.entity';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  findAll(): Observable<Author[]> {
    return this.authorService.findAll();
  }

  @Post()
  create(@Body('name') name: string): Observable<Author> {
    console.log('name', name);
    return this.authorService.create(name);
  }
}
