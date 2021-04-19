import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';
import { GetTaxiQueryDto } from './dto/get-taxi-query.dto';

@Injectable()
export class TaxiService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async find(query: GetTaxiQueryDto) {
    const { latitude, longitude, count = 10 } = query;
    const taxiApiHost = this.configService.get<string>('taxiApiHost');

    return this.httpService
      .get(
        `${taxiApiHost}?latitude=${latitude}&longitude=${longitude}&count=${count}`,
      )
      .pipe(map(response => response.data));
  }
}
