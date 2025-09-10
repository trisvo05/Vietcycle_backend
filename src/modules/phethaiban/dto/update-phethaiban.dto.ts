import { PartialType } from '@nestjs/mapped-types';
import { CreatePhethaibanDto } from './create-phethaiban.dto';

export class UpdatePhethaibanDto extends PartialType(CreatePhethaibanDto) {}
