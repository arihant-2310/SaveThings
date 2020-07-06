import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Param,
  Body,
  ParseIntPipe,
  Get,
} from '@nestjs/common';
import { CreateThingsDto } from './dto/createThings.dto';
import { ThingsService } from './things.service';
import { ApiTags } from '@nestjs/swagger';
import { GetThingsDto } from './dto/getThingsDto.dto';

@ApiTags('THINGS MANAGEMENT')
@Controller('/api/v1/things')
export class ThingsController {
  constructor(private readonly thingsService: ThingsService) {}

  //Route to create things
  @Post('create_thing/:userid')
  @UsePipes(new ValidationPipe())
  async create(
    @Param('userid', ParseIntPipe) userid: number,
    @Body() createThingsDto: CreateThingsDto,
  ): Promise<any> {
    return this.thingsService.createThings(createThingsDto, userid);
  }

  //Route to get the stored thing
  @Post('get_things/:userid')
  @UsePipes(new ValidationPipe())
  async getThing(
    @Param('userid', ParseIntPipe) userid: number,
    @Body() getThingsDto: GetThingsDto,
  ): Promise<any> {
    return this.thingsService.getThings(getThingsDto, userid);
  }
}
