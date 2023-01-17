import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateValitadeDto {
  @ApiProperty({ description: 'nome municipio' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
