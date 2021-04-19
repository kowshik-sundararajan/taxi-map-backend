import { HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TaxiController } from './taxi.controller';
import { TaxiService } from './taxi.service';

describe('TaxiController', () => {
  let controller: TaxiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxiController],
      providers: [TaxiService],
      imports: [HttpModule, ConfigModule],
    }).compile();

    controller = module.get<TaxiController>(TaxiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
