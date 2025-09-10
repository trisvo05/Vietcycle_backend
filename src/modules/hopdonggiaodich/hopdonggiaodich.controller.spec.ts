import { Test, TestingModule } from '@nestjs/testing';
import { HopdonggiaodichController } from './hopdonggiaodich.controller';
import { HopdonggiaodichService } from './hopdonggiaodich.service';

describe('HopdonggiaodichController', () => {
  let controller: HopdonggiaodichController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HopdonggiaodichController],
      providers: [HopdonggiaodichService],
    }).compile();

    controller = module.get<HopdonggiaodichController>(HopdonggiaodichController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
