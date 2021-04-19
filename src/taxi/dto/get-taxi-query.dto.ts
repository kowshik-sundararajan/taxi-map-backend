import {
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
} from 'class-validator';

export class GetTaxiQueryDto {
  @IsLatitude()
  @IsNotEmpty()
  readonly latitude: number;

  @IsLongitude()
  @IsNotEmpty()
  readonly longitude: number;

  @IsNumberString()
  @IsOptional()
  readonly count: number;
}
