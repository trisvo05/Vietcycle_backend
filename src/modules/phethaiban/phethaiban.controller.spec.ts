import { Test, TestingModule } from '@nestjs/testing';
import { PhethaibanController } from './phethaiban.controller';
import { PhethaibanService } from './phethaiban.service';

describe('PhethaibanController', () => {
  let controller: PhethaibanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhethaibanController],
      providers: [PhethaibanService],
    }).compile();

    controller = module.get<PhethaibanController>(PhethaibanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
