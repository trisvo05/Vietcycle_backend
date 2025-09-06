import { PartialType } from '@nestjs/mapped-types';
import { CreatePheThaiDto } from './create-phe-thai.dto';

export class UpdatePheThaiDto extends PartialType(CreatePheThaiDto) {}
