import { Product, productDocument } from './../schemas/product.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel : Model<productDocument>){}

  async create(createProductDto: CreateProductDto) : Promise<Product>{
    return new this.productModel(createProductDto).save();
  }

  async findAll() {
    return this.productModel.find();
  }

  async findOne(id: number) {
    return this.productModel.findOne({id});
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.productModel.updateOne({id},{$set:{...updateProductDto}});
  }

  remove(id: number) {
    return this.productModel.deleteOne({id});
  }
}
