import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetThingsDto {
  @ApiProperty({
    example: 'Browser,Google',
  })
  @IsString()
  keywords: string;
}
