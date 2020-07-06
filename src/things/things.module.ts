import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Things } from './entity/things.entity';
import { ThingsController } from './things.controller';
import { ThingsService } from './things.service';
import { ThingsRepository } from './things.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Things, ThingsRepository])],
  controllers: [ThingsController],
  providers: [ThingsService],
  exports: [ThingsService],
})
export class ThingsModule {}
