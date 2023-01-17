import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { ProductDto } from 'src/mongoose/dto/product.dto';
import { CreateValitadeDto } from './dto/createValitadeDto.dto';
import { UpdateValidateDto } from './dto/updateValitadeDto.dto';
import { DeleteValitadeDto } from './dto/deleteValitadeDto.dto';

@ApiTags('Product')
@Controller('Product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() data: CreateValitadeDto): Promise<ProductDto> {
    return this.productService.created(data);
  }

  @Patch('update')
  @HttpCode(HttpStatus.OK)
  public async update(@Body() data: UpdateValidateDto): Promise<ProductDto> {
    return this.productService.update(data);
  }

  @Delete('delete')
  @HttpCode(HttpStatus.OK)
  public async delete(@Body() data: DeleteValitadeDto): Promise<ProductDto> {
    return this.productService.delete(data.id);
  }

  @Get('allProducts')
  @HttpCode(HttpStatus.OK)
  public async findAll(): Promise<ProductDto[]> {
    return this.productService.findAll();
  }
}
