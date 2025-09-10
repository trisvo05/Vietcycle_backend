import { Test, TestingModule } from '@nestjs/testing';
import { PhethaibanService } from './phethaiban.service';

describe('PhethaibanService', () => {
  let service: PhethaibanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhethaibanService],
    }).compile();

    service = module.get<PhethaibanService>(PhethaibanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
