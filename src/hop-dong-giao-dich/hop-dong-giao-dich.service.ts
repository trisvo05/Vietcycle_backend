import { Injectable } from '@nestjs/common';
import { CreateHopDongGiaoDichDto } from './dto/create-hop-dong-giao-dich.dto';
import { UpdateHopDongGiaoDichDto } from './dto/update-hop-dong-giao-dich.dto';

@Injectable()
export class HopDongGiaoDichService {
  create(createHopDongGiaoDichDto: CreateHopDongGiaoDichDto) {
    return 'This action adds a new hopDongGiaoDich';
  }

  findAll() {
    return `This action returns all hopDongGiaoDich`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hopDongGiaoDich`;
  }

  update(id: number, updateHopDongGiaoDichDto: UpdateHopDongGiaoDichDto) {
    return `This action updates a #${id} hopDongGiaoDich`;
  }

  remove(id: number) {
    return `This action removes a #${id} hopDongGiaoDich`;
  }
}
