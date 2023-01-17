import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { StatusProductDto } from 'src/mongoose/dto/product.dto';

export class UpdateValidateDto {
  @ApiProperty({ description: 'id product' })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({ description: 'name product' })
  @IsString()
  @IsOptional()
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
