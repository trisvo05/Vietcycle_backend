import { Test, TestingModule } from '@nestjs/testing';
import { PhethaiService } from './phethai.service';

describe('PhethaiService', () => {
  let service: PhethaiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhethaiService],
    }).compile();

    service = module.get<PhethaiService>(PhethaiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
