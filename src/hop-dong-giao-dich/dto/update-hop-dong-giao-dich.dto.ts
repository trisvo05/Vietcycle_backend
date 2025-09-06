import { PartialType } from '@nestjs/mapped-types';
import { CreateHopDongGiaoDichDto } from './create-hop-dong-giao-dich.dto';

export class UpdateHopDongGiaoDichDto extends PartialType(CreateHopDongGiaoDichDto) {}
