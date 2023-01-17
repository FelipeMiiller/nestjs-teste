import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductService as ProductDB } from 'src/mongoose/services/product/product.service';
import { ProductUpdateDto } from 'src/mongoose/dto/productUpdate.dto';
import { ProductDto } from 'src/mongoose/dto/product.dto';
import { CreateValitadeDto } from './dto/createValitadeDto.dto';
@Injectable()
export class ProductService {
  constructor(private readonly productDB: ProductDB) {}

  public async created(data: CreateValitadeDto): Promise<ProductDto> {
    const dataCreated: ProductDto = {
      name: data.name,
      category: data.category,
      status: data.status,
      quantity: data.quantity,
    };

    try {
      const product = await this.productDB.created(dataCreated);

      return {
        id: product._id,
        name: product.name,
        category: product.category,
        status: product.status,
        quantity: product.quantity,
        created_at: product.createdAt,
        updated_at: product.updatedAt,
        deleted_at: product.deleted_at,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  public async update(productUpdateDto: ProductUpdateDto): Promise<any> {
    try {
      const product = await this.productDB.update(productUpdateDto);

      return {
        id: product._id,
        name: product.name,
        category: product.category,
        status: product.status,
        quantity: product.quantity,
        created_at: product.createdAt,
        updated_at: product.updatedAt,
        deleted_at: product.deleted_at,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  public async delete(id: string): Promise<any> {
    try {
      await this.productDB.deleteDate(id);

      return 'product deleted successfully';
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  public async findAll(): Promise<ProductDto[]> {
    try {
      const data = await this.productDB.findAll();
      const products = data.map((product) => {
        return {
          id: product._id,
          name: product.name,
          category: product.category,
          status: product.status,
          quantity: product.quantity,
          created_at: product.createdAt,
          updated_at: product.updatedAt,
          deleted_at: product.deleted_at,
        };
      });

      return products;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
