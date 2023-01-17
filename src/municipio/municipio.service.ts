import { Injectable, NotFoundException } from '@nestjs/common';
import { MunicipioService as MunicipioDB } from 'src/mongoose/services/municipio/municipio.service';
import { HttpService } from '@nestjs/axios';
import { MunicipioApiDto } from './dto/municipioApi.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class MunicipioService {
  constructor(private readonly municipioDB: MunicipioDB, private readonly httpService: HttpService) {}

  public async created(data: { name: string }): Promise<any> {
    try {
      const filter = await this.filterMunicipio(data.name);
      console.log(filter);

      const save = await this.municipioDB.created({ id: filter.id, name: filter.nome });

      return save;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  public async findAll(): Promise<MunicipioApiDto[]> {
    try {
      const data = await this.municipioDB.findAll();
      const municipios = data.map((item) => {
        return {
          id: item.id,
          nome: item.name,
        };
      });

      return municipios;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  private async findAllApiMunicipio(): Promise<MunicipioApiDto[]> {
    const { data } = await firstValueFrom(this.httpService.get<MunicipioApiDto[]>(process.env.API_IBGE));
    if (!data) {
      throw new Error('Api IBGE Error.');
    } else {
      return data;
    }
  }

  private async filterMunicipio(name: string): Promise<MunicipioApiDto> {
    try {
      const nameFilter = name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/\s/g, '');

      const dataIBGE = await this.findAllApiMunicipio();
      const ibgeFilter = dataIBGE.map((item) => {
        return {
          id: item.id,
          nome: item.nome
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/\s/g, ''),
        };
      });
      const findMunicipio = ibgeFilter.find((item) => item.nome === nameFilter);
      const data = dataIBGE.filter((item) => item.id === findMunicipio.id)[0];
      return data;
    } catch (error) {
      throw new Error('Not found Municipio.');
    }
  }
}
