import { StatusProductDto } from './product.dto';

export interface ProductUpdateDto {
  id: string;
  name?: string;
  category?: string;
  status?: StatusProductDto;
  quantity?: number;
}
