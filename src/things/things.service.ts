import { Injectable } from '@nestjs/common';
import { CreateThingsDto } from './dto/createThings.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ThingsRepository } from './things.repository';
import { GetThingsDto } from './dto/getThingsDto.dto';

@Injectable()
export class ThingsService {
  constructor(
    @InjectRepository(ThingsRepository)
    private readonly thingsRepository: ThingsRepository,
  ) {}
  async createThings(data: CreateThingsDto, userid: number) {
    return this.thingsRepository.createThings(data, userid);
  }
  async getThings(data: GetThingsDto, userid: number) {
    return this.thingsRepository.getThings(data, userid);
  }
}
