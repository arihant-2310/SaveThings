import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateThingsDto {
  @ApiProperty({ example: 'https://www.google.com' })
  @IsString()
  website: string;

  @ApiProperty({ example: 'My favorite web browser!' })
  @IsString()
  description: string;

  @ApiProperty({
    example: 'Browser,Google',
  })
  @IsString()
  keywords: string;
}
