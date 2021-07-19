import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [MikroOrmModule.forRoot(), TodoModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
