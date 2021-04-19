import { HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TaxiService } from './taxi.service';

describe('TaxiService', () => {
  let service: TaxiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxiService],
      imports: [HttpModule, ConfigModule],
    }).compile();

    service = module.get<TaxiService>(TaxiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
