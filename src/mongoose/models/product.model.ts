import { Document } from 'mongoose';
import { StatusProductDto } from '../dto/product.dto';

export interface ProductModel extends Document {
  name: string;
  category: string;
  status?: StatusProductDto;
  quantity?: number;
  deleted_at?: Date;
  updatedAt?: Date;
  createdAt?: Date;
}
