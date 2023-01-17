import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateValitadeDto } from './dto/createValitadeDto.dto';

import { MunicipioDto } from 'src/mongoose/dto/municipio.dto';
import { MunicipioService } from './municipio.service';

@ApiTags('Municipio')
@Controller('Municipio')
export class MunicipioController {
  constructor(private readonly municipioService: MunicipioService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() request: CreateValitadeDto): Promise<MunicipioDto> {
    return this.municipioService.created(request);
  }

  @Get('allMonicipios')
  @HttpCode(HttpStatus.OK)
  public async findAll(): Promise<MunicipioDto[]> {
    return this.municipioService.findAll();
  }
}
