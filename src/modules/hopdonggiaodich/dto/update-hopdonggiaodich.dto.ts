import { PartialType } from '@nestjs/mapped-types';
import { CreateHopdonggiaodichDto } from './create-hopdonggiaodich.dto';

export class UpdateHopdonggiaodichDto extends PartialType(CreateHopdonggiaodichDto) {}
