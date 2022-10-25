import { Type } from 'class-transformer';
import { IsNotEmpty, IsInt, IsString, MaxLength, Min } from 'class-validator';

export class CreateItemDto {
  //プロパティはCreateリクエストのBodyパラメータと一緒
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
