import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Hopdonggiaodich } from './entities/hopdonggiaodich.entity';
import { CreateHopdonggiaodichDto } from './dto/create-hopdonggiaodich.dto';
import { UpdateHopdonggiaodichDto } from './dto/update-hopdonggiaodich.dto';
import { HopDongGiaoDich } from 'src/entities/hopdonggiaodich.entity';
// import { Phethai } from './entities/phethai.entity';
// import { CreatePhethaiDto } from './dto/create-phethai.dto';
// import { UpdatePhethaiDto } from './dto/update-phethai.dto';


@Injectable()
export class HopdonggiaodichService {
  constructor(
    @InjectRepository(HopDongGiaoDich)
    private readonly phethaiRepository: Repository<HopDongGiaoDich>,
  ) {}

  async create(createPhethaiDto: CreateHopdonggiaodichDto): Promise<HopDongGiaoDich> {
    const phethai = this.phethaiRepository.create(createPhethaiDto);
    return await this.phethaiRepository.save(phethai);
  }

  async findAll(): Promise<HopDongGiaoDich[]> {
    return await this.phethaiRepository.find();
  }

  async findOne(id: number ): Promise<HopDongGiaoDich> {
    const phethai = await this.phethaiRepository.findOne({ where: { id } });
    if (!phethai) {
      throw new NotFoundException(`Phethai with ID ${id} not found`);
    }
    return phethai;
  }

  async update(id: number, updatePhethaiDto: UpdateHopdonggiaodichDto): Promise<HopDongGiaoDich> {
    const phethai = await this.findOne(id);
    const updated = Object.assign(phethai, updatePhethaiDto);
    return await this.phethaiRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const phethai = await this.findOne(id);
    await this.phethaiRepository.remove(phethai);
  }
}
