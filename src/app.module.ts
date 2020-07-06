import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbConfig } from './config/db.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(DbConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
