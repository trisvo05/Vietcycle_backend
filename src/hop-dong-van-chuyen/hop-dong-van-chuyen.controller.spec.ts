import { Test, TestingModule } from '@nestjs/testing';
import { HopDongVanChuyenController } from './hop-dong-van-chuyen.controller';
import { HopDongVanChuyenService } from './hop-dong-van-chuyen.service';

describe('HopDongVanChuyenController', () => {
  let controller: HopDongVanChuyenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HopDongVanChuyenController],
      providers: [HopDongVanChuyenService],
    }).compile();

    controller = module.get<HopDongVanChuyenController>(HopDongVanChuyenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
