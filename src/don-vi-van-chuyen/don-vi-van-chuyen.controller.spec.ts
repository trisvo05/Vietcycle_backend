import { Test, TestingModule } from '@nestjs/testing';
import { DonViVanChuyenController } from './don-vi-van-chuyen.controller';
import { DonViVanChuyenService } from './don-vi-van-chuyen.service';

describe('DonViVanChuyenController', () => {
  let controller: DonViVanChuyenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonViVanChuyenController],
      providers: [DonViVanChuyenService],
    }).compile();

    controller = module.get<DonViVanChuyenController>(DonViVanChuyenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
