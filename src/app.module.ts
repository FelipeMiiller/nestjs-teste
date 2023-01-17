import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule as MongooseNestJS } from '@nestjs/mongoose';
import { MongooseModule } from './mongoose/mongoose.module';
import { ProductModule } from './product/product.module';
import { MunicipioModule } from './municipio/municipio.module';
@Module({
  imports: [ProductModule, MunicipioModule, MongooseNestJS.forRoot(process.env.MONGO_URI), MongooseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
