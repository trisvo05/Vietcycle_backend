import { Injectable } from '@nestjs/common';
import { CreateHopDongVanChuyenDto } from './dto/create-hop-dong-van-chuyen.dto';
import { UpdateHopDongVanChuyenDto } from './dto/update-hop-dong-van-chuyen.dto';

@Injectable()
export class HopDongVanChuyenService {
  create(createHopDongVanChuyenDto: CreateHopDongVanChuyenDto) {
    return 'This action adds a new hopDongVanChuyen';
  }

  findAll() {
    return `This action returns all hopDongVanChuyen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hopDongVanChuyen`;
  }

  update(id: number, updateHopDongVanChuyenDto: UpdateHopDongVanChuyenDto) {
    return `This action updates a #${id} hopDongVanChuyen`;
  }

  remove(id: number) {
    return `This action removes a #${id} hopDongVanChuyen`;
  }
}
