export interface ProductDtoDB {
  _id?: string;
  name: string;
  category?: string;
  status?: StatusProductDto;
  quantity?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deleted_at?: Date;
}

export interface ProductDto {
  id?: string;
  name: string;
  category: string;
  status: StatusProductDto;
  quantity: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export enum StatusProductDto {
  ACTIVE,
  INACTIVE,
}
