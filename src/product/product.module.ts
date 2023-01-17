import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { MongooseModule } from 'src/mongoose/mongoose.module';
import { ProductService } from './product.service';

@Module({
  imports: [MongooseModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
