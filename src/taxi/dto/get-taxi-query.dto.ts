import {
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class GetTaxiQueryDto {
  @IsLatitude()
  @IsNotEmpty()
  readonly latitude: number;

  @IsLongitude()
  @IsNotEmpty()
  readonly longitude: number;

  @IsNumber()
  @IsOptional()
  readonly count: number;
}
