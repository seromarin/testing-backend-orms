import { Migration } from '@mikro-orm/migrations';

export class Migration20210719020908 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "author" ("id" serial primary key, "created_at" jsonb not null, "updated_at" jsonb not null, "name" varchar(255) not null);',
    );

    this.addSql(
      'create table "todo" ("id" serial primary key, "task" varchar(255) not null, "is_completed" jsonb not null, "created_at" jsonb not null, "updated_at" jsonb not null, "author_id" int4 not null);',
    );

    this.addSql(
      'alter table "todo" add constraint "todo_author_id_foreign" foreign key ("author_id") references "author" ("id") on update cascade;',
    );
  }
}
