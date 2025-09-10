import { SetMetadata } from '@nestjs/common';
import { AccountRole } from 'src/entities/account.entity';
// import { AccountRole } from 'src/account/entities/account.entity';
// import { Role } from '../users/user.entity';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: AccountRole[]) => SetMetadata(ROLES_KEY, roles);
