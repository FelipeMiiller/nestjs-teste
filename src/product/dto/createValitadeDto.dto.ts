import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { StatusProductDto } from 'src/mongoose/dto/product.dto';

export class CreateValitadeDto {
  @ApiProperty({ description: 'name product' })
  @IsString()
  @IsNotEmpty()
  name?: string;

  @ApiProperty({ description: 'Category product' })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({ description: 'Status product ' })
  @IsString()
  @IsOptional()
  status?: StatusProductDto;

  @ApiProperty({ description: 'Quantity product' })
  @IsNumber()
  @IsOptional()
  quantity?: number;
}
