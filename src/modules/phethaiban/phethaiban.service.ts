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

  async getByUserId(userId: number): Promise<PheThaiBan[]> {
    // Lấy danh sách phethaiban kèm thông tin phethai
    return this.pheThaiBanRepo.find({
      relations: ['pheThai'], // join phethai
      where: {
        pheThai: {
          account: { id: userId }, // filter theo userID
        },
      },
    });
  }
  async findAll(): Promise<PheThaiBan[]> {
    return this.pheThaiBanRepo.find({
      relations: ['pheThai','pheThai.account.doanhNghiepProfile'], // join phethai
    });
  }
  async findOne(id: number): Promise<PheThaiBan> {
    const phethaiban = await this.pheThaiBanRepo.findOne({ where: { id } ,relations: ['pheThai','pheThai.account.doanhNghiepProfile']});
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
