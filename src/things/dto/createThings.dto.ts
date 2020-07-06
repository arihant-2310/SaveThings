import { IsString } from 'class-validator';

export class CreateQuestionsDto {
  @IsString()
  website: string;

  @IsString()
  description: string;

  @IsString()
  keywords: string;
}
