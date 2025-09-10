import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PheThaiBan } from 'src/entities/phethaiban.entity';
import { CreatePhethaibanDto } from './dto/create-phethaiban.dto';
import { UpdatePhethaibanDto } from './dto/update-phethaiban.dto';

@Injectable()
export class PhethaibanService {
  constructor(
    @InjectRepository(PheThaiBan)
    private readonly pheThaiBanRepo: Repository<PheThaiBan>,
  ) {}

  async create(createPhethaibanDto: CreatePhethaibanDto): Promise<PheThaiBan> {
    const phethaiban = this.pheThaiBanRepo.create(createPhethaibanDto);
    return await this.pheThaiBanRepo.save(phethaiban);
  }

  async findAll(): Promise<PheThaiBan[]> {
    return await this.pheThaiBanRepo.find();
  }

  async findOne(id: number): Promise<PheThaiBan> {
    const phethaiban = await this.pheThaiBanRepo.findOne({ where: { id } });
    if (!phethaiban) {
      throw new NotFoundException(`Phethai with ID ${id} not found`);
    }
    return phethaiban;
  }

  async update(id: number, updatePhethaibanDto: UpdatePhethaibanDto): Promise<PheThaiBan> {
    const phethaiban = await this.findOne(+id);
    const updated = Object.assign(phethaiban, updatePhethaibanDto);
    return await this.pheThaiBanRepo.save(updated);
  }

  async remove(id: number): Promise<void> {
    const phethaiban = await this.findOne(+id);
    await this.pheThaiBanRepo.remove(phethaiban);
  }
}
