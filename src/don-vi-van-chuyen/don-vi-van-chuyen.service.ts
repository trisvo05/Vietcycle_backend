import { Injectable } from '@nestjs/common';
import { CreateDonViVanChuyenDto } from './dto/create-don-vi-van-chuyen.dto';
import { UpdateDonViVanChuyenDto } from './dto/update-don-vi-van-chuyen.dto';

@Injectable()
export class DonViVanChuyenService {
  create(createDonViVanChuyenDto: CreateDonViVanChuyenDto) {
    return 'This action adds a new donViVanChuyen';
  }

  findAll() {
    return `This action returns all donViVanChuyen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} donViVanChuyen`;
  }

  update(id: number, updateDonViVanChuyenDto: UpdateDonViVanChuyenDto) {
    return `This action updates a #${id} donViVanChuyen`;
  }

  remove(id: number) {
    return `This action removes a #${id} donViVanChuyen`;
  }
}
