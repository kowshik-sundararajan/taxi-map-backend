import { Controller, Get, Query } from '@nestjs/common';
import { GetTaxiQueryDto } from './dto/get-taxi-query.dto';
import { TaxiService } from './taxi.service';

@Controller('taxi')
export class TaxiController {
  constructor(private readonly taxiService: TaxiService) {}
  @Get()
  find(@Query() query: GetTaxiQueryDto) {
    return this.taxiService.find(query);
  }
}
