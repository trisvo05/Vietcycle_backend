import { Test, TestingModule } from '@nestjs/testing';
import { PheThaiService } from './phe-thai.service';

describe('PheThaiService', () => {
  let service: PheThaiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PheThaiService],
    }).compile();

    service = module.get<PheThaiService>(PheThaiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
