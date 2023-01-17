import { Module } from '@nestjs/common';
import { MunicipioController } from './municipio.controller';
import { MongooseModule } from 'src/mongoose/mongoose.module';
import { MunicipioService } from './municipio.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [MongooseModule, HttpModule],
  controllers: [MunicipioController],
  providers: [MunicipioService],
})
export class MunicipioModule {}
