import { Test, TestingModule } from '@nestjs/testing';
import { DonViVanChuyenService } from './don-vi-van-chuyen.service';

describe('DonViVanChuyenService', () => {
  let service: DonViVanChuyenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonViVanChuyenService],
    }).compile();

    service = module.get<DonViVanChuyenService>(DonViVanChuyenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
