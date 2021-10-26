import { productSchema } from './../schemas/product.schema';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from 'src/schemas/product.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:Product.name,schema:productSchema}])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
