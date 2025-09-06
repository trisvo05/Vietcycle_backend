import { PartialType } from '@nestjs/mapped-types';
import { CreateHopDongVanChuyenDto } from './create-hop-dong-van-chuyen.dto';

export class UpdateHopDongVanChuyenDto extends PartialType(CreateHopDongVanChuyenDto) {}
