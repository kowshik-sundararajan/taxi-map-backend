import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { GetTaxiQueryDto } from './dto/get-taxi-query.dto';

@Injectable()
export class TaxiService {
  constructor(private httpService: HttpService) {}

  async find(query: GetTaxiQueryDto) {
    const { latitude, longitude, count = 10 } = query;
    return this.httpService
      .get(
        `https://qa-interview-test.splytech.dev/api/drivers?latitude=${latitude}&longitude=${longitude}&count=${count}`,
      )
      .pipe(map(response => response.data));
  }
}
