import { Test, TestingModule } from '@nestjs/testing';
import { PheThaiController } from './phe-thai.controller';
import { PheThaiService } from './phe-thai.service';

describe('PheThaiController', () => {
  let controller: PheThaiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PheThaiController],
      providers: [PheThaiService],
    }).compile();

    controller = module.get<PheThaiController>(PheThaiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
