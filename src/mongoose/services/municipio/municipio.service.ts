import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { MunicipioModel } from 'src/mongoose/models/municipio.model';

@Injectable()
export class MunicipioService {
  constructor(
    @InjectModel('Municipio')
    private readonly municipioModel: Model<MunicipioModel>,
  ) {}

  public async created(data: { id: number; name: string }): Promise<MunicipioModel> {
    const municipio = await this.municipioModel.findOne({ name: data.name });
    if (!municipio) {
      const Save = new this.municipioModel(data);
      return Save.save();
    } else {
      throw new Error('Municipio already registered.');
    }
  }

  public async findAll(): Promise<MunicipioModel[]> {
    const data = await this.municipioModel.find();

    if (!data) {
      throw new Error('Municipio no found!');
    } else {
      return data;
    }
  }

  private async findID(id: string): Promise<MunicipioModel> {
    const data = await this.municipioModel.findById(id);
    if (!data) {
      throw new Error('Id Municipio not found.');
    }
    return data;
  }

  private async findName(name: string): Promise<MunicipioModel> {
    const data = await this.municipioModel.findOne({ name });
    if (!data) {
      throw new Error('Name Municipio not found.');
    }
    return data;
  }
}
