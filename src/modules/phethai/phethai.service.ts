import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Phethai } from './entities/phethai.entity';
import { CreatePhethaiDto } from './dto/create-phethai.dto';
import { UpdatePhethaiDto } from './dto/update-phethai.dto';
import { PheThai } from 'src/entities/phethai.entity';

@Injectable()
export class PhethaiService {
  constructor(
    @InjectRepository(PheThai)
    private readonly phethaiRepository: Repository<PheThai>,
  ) {}

async create(createPhethaiDto: CreatePhethaiDto, userId: number): Promise<PheThai> {
  // Tạo entity mới, gán userId
  const phethai = this.phethaiRepository.create({
    ...createPhethaiDto,
    account: { id: userId }, // gán userId thông qua quan hệ account
  });

  return await this.phethaiRepository.save(phethai);
}

  async findAll(): Promise<PheThai[]> {
    return await this.phethaiRepository.find();
  }

  async findOne(id: string): Promise<PheThai> {
    const phethai = await this.phethaiRepository.findOne({ where: { id } });
    if (!phethai) {
      throw new NotFoundException(`Phethai with ID ${id} not found`);
    }
    return phethai;
  }

  async update(id: string, updatePhethaiDto: UpdatePhethaiDto): Promise<PheThai> {
    const phethai = await this.findOne(id);
    const updated = Object.assign(phethai, updatePhethaiDto);
    return await this.phethaiRepository.save(updated);
  }

  async remove(id: string): Promise<void> {
    const phethai = await this.findOne(id);
    await this.phethaiRepository.remove(phethai);
  }


    // Lấy phế thải theo userId
  async getByUserId(userId: number): Promise<PheThai[]> {
    return this.phethaiRepository.find({
      where: { account: { id: userId } }
      // relations: ['account'],
    });
  }

}
