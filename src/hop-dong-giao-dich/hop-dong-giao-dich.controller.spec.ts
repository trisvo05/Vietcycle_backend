import { Test, TestingModule } from '@nestjs/testing';
import { HopDongGiaoDichController } from './hop-dong-giao-dich.controller';
import { HopDongGiaoDichService } from './hop-dong-giao-dich.service';

describe('HopDongGiaoDichController', () => {
  let controller: HopDongGiaoDichController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HopDongGiaoDichController],
      providers: [HopDongGiaoDichService],
    }).compile();

    controller = module.get<HopDongGiaoDichController>(HopDongGiaoDichController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
