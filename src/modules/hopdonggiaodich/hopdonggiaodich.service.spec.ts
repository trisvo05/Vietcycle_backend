import { Test, TestingModule } from '@nestjs/testing';
import { HopdonggiaodichService } from './hopdonggiaodich.service';

describe('HopdonggiaodichService', () => {
  let service: HopdonggiaodichService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HopdonggiaodichService],
    }).compile();

    service = module.get<HopdonggiaodichService>(HopdonggiaodichService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
