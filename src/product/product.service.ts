import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepo.create(createProductDto);
    return await this.productRepo.save(product);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepo.find();
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepo.findOneBy({ id });
  }
  
  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    await this.productRepo.update(id, updateProductDto);
    return this.findOne(id);
  }
  async remove(id: number): Promise<{ message: string }> {
    const result = await this.productRepo.delete(id);
    if (result.affected === 0) {
      throw new Error(`Product with id ${id} not found`);
    }
    return { message: `Product with id ${id} deleted successfully` };
  }
}
