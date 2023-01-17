import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ProductUpdateDto } from 'src/mongoose/dto/productUpdate.dto';
import { ProductModel } from 'src/mongoose/models/product.model';
import { ProductDto } from 'src/mongoose/dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductModel>,
  ) {}

  public async created(data: ProductDto): Promise<ProductModel> {
    const product = await this.productModel.findOne({ name: data.name });
    if (!product) {
      const Save = new this.productModel(data);
      return Save.save();
    } else {
      throw new Error('Product already registered.');
    }
  }

  public async update(productUpdateDto: ProductUpdateDto): Promise<ProductModel> {
    const data = await this.productModel.findByIdAndUpdate(productUpdateDto.id, {
      name: productUpdateDto.name,
      category: productUpdateDto.category,
      status: productUpdateDto.status,
      quantity: productUpdateDto.quantity,
    });
    if (!data) {
      throw new Error('Id already exists.');
    } else {
      return data;
    }
  }

  public async deleteDate(id: string): Promise<ProductModel> {
    const date = new Date();

    const data = await this.productModel.findByIdAndUpdate(id, {
      deleted_at: date,
    });
    if (!data) {
      throw new Error('Id already exists.');
    } else {
      return data;
    }
  }

  public async delete(id: string): Promise<any> {
    const data = await this.productModel.deleteOne({ _id: id });
    if (!data) {
      throw new Error('Id already exists.');
    } else {
      return data;
    }
  }

  public async findAll(): Promise<ProductModel[]> {
    const data = await this.productModel.find();

    if (!data) {
      throw new Error('Product no found!');
    } else {
      return data;
    }
  }

  private async findID(id: string): Promise<ProductModel> {
    const data = await this.productModel.findById(id);
    if (!data) {
      throw new Error('Id Product not found.');
    }
    return data;
  }

  private async findName(name: string): Promise<ProductModel> {
    const data = await this.productModel.findOne({ name });
    if (!data) {
      throw new Error('Name Product not found.');
    }
    return data;
  }
}
