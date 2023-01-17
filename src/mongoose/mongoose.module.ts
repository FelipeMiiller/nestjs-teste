import { Module } from '@nestjs/common';
import { ProductSchema } from './schemas/Product.schema';
import { MongooseModule as MongooseNestJS } from '@nestjs/mongoose';
import { ProductService } from './services/product/product.service';
import { MunicipioSchema } from './schemas/Municipio.schema';
import { MunicipioService } from './services/municipio/municipio.service';

@Module({
  imports: [
    MongooseNestJS.forFeature([
      {
        name: 'Product',
        schema: ProductSchema,
      },
      {
        name: 'Municipio',
        schema: MunicipioSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [ProductService, MunicipioService],
  exports: [ProductService, MunicipioService],
})
export class MongooseModule {}
