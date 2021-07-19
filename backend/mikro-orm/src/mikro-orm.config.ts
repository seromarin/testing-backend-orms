import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';

const mikroConfig: MikroOrmModuleSyncOptions = {
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  dbName: 'postgres',
  type: 'postgresql',
  user: 'postgres',
  password: 'postgres',
};

export default mikroConfig;
