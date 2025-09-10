import { Test, TestingModule } from '@nestjs/testing';
import { PhethaiController } from './phethai.controller';
import { PhethaiService } from './phethai.service';

describe('PhethaiController', () => {
  let controller: PhethaiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhethaiController],
      providers: [PhethaiService],
    }).compile();

    controller = module.get<PhethaiController>(PhethaiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
