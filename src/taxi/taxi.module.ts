import { HttpModule, Module } from '@nestjs/common';
import { TaxiService } from './taxi.service';
import { TaxiController } from './taxi.controller';

@Module({
  controllers: [TaxiController],
  providers: [TaxiService],
  imports: [HttpModule],
})
export class TaxiModule {}
