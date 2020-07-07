import { Things } from './entity/things.entity';
import { EntityRepository, Repository, getRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateThingsDto } from './dto/createThings.dto';
import { GetThingsDto } from './dto/getThingsDto.dto';

@Injectable()
@EntityRepository(Things)
export class ThingsRepository extends Repository<Things> {
  //save things to db
  createThings = async (createThingsDto: CreateThingsDto, userid: number) => {
    const { website, description, keywords } = createThingsDto;
    const things = new Things();
    let result;
    try {
      things.website = website;
      things.description = description;
      things.keywords = keywords;
      things.userid = userid;
      await things.save().then(res => {
        result = res;
      });
      return {
        status: 201,
        message: 'successfully saved things',
        result: result,
      };
    } catch (err) {
      console.log('cant save things!!', err);
    }
  };
  //get the things stored in db
  getThings = async (getThingsDto: GetThingsDto, userid: number) => {
    const { keywords } = getThingsDto;
    try {
      const things = await getRepository(Things)
        .createQueryBuilder('things')
        .where(
          'things.userid = :id AND (things.keywords LIKE :search or things.description LIKE :search)',
          {
            id: userid,
            search: '%' + keywords + '%',
          },
        )
        .getMany();
      if (Array.isArray(things) && things.length) {
        return {
          message: 'Things retrieved successfully!! ',
          things,
        };
      } else {
        return {
          statusCode: 400,
          error: 'No things are found....',
        };
      }
    } catch (err) {
      console.log(err);
      return {
        statusCode: 400,
        error: 'Error retrieving stored things..',
      };
    }
  };
}
