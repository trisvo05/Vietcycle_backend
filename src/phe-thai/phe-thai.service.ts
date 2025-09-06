import { Injectable } from '@nestjs/common';
import { CreatePheThaiDto } from './dto/create-phe-thai.dto';
import { UpdatePheThaiDto } from './dto/update-phe-thai.dto';

@Injectable()
export class PheThaiService {
  create(createPheThaiDto: CreatePheThaiDto) {
    return 'This action adds a new pheThai';
  }

  findAll() {
    return `This action returns all pheThai`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pheThai`;
  }

  update(id: number, updatePheThaiDto: UpdatePheThaiDto) {
    return `This action updates a #${id} pheThai`;
  }

  remove(id: number) {
    return `This action removes a #${id} pheThai`;
  }
}
