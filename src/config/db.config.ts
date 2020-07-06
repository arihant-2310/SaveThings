import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
import * as fs from 'fs';
const dbConfig = config.get('db');

export const DbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../**/migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  cli: {
    migrationsDir: 'migrations',
  },
};
