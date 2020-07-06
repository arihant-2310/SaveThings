import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbConfig } from './config/db.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThingsController } from './things/things.controller';
import { ThingsService } from './things/things.service';
import { ThingsModule } from './things/things.module';

@Module({
  imports: [TypeOrmModule.forRoot(DbConfig), ThingsModule],
  controllers: [AppController, ThingsController],
  providers: [AppService, ThingsService],
})
export class AppModule {}
