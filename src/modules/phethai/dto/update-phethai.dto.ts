import { PartialType } from '@nestjs/mapped-types';
import { CreatePhethaiDto } from './create-phethai.dto';

export class UpdatePhethaiDto extends PartialType(CreatePhethaiDto) {}
