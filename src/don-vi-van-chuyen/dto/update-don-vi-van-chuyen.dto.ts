import { PartialType } from '@nestjs/mapped-types';
import { CreateDonViVanChuyenDto } from './create-don-vi-van-chuyen.dto';

export class UpdateDonViVanChuyenDto extends PartialType(CreateDonViVanChuyenDto) {}
