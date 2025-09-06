import { Test, TestingModule } from '@nestjs/testing';
import { HopDongGiaoDichService } from './hop-dong-giao-dich.service';

describe('HopDongGiaoDichService', () => {
  let service: HopDongGiaoDichService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HopDongGiaoDichService],
    }).compile();

    service = module.get<HopDongGiaoDichService>(HopDongGiaoDichService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
