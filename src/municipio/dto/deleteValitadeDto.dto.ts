import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteValitadeDto {
  @ApiProperty({ description: 'product id' })
  @IsNotEmpty()
  @IsString()
  id: string;
}
