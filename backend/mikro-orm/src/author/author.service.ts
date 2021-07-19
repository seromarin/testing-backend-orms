import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Author } from 'src/entities/Author.entity';
import { Observable, from, of } from 'rxjs';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: EntityRepository<Author>,
  ) {}

  findAll(): Observable<Author[]> {
    return from(this.authorRepository.findAll());
  }

  findOne(id: string): Observable<Author> {
    return from(this.authorRepository.findOne({ id: Number(id) }));
  }

  create(name: string): Observable<Author> {
    return of(this.authorRepository.create(new Author(name)));
  }
}
