import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxiModule } from './taxi/taxi.module';

@Module({
  imports: [TaxiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
