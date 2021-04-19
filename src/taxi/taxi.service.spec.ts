import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TaxiService } from './taxi.service';

describe('TaxiService', () => {
  let service: TaxiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxiService],
      imports: [HttpModule],
    }).compile();

    service = module.get<TaxiService>(TaxiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
