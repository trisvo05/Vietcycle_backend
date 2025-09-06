import { Test, TestingModule } from '@nestjs/testing';
import { HopDongVanChuyenService } from './hop-dong-van-chuyen.service';

describe('HopDongVanChuyenService', () => {
  let service: HopDongVanChuyenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HopDongVanChuyenService],
    }).compile();

    service = module.get<HopDongVanChuyenService>(HopDongVanChuyenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
