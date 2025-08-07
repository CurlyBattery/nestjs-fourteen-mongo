import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDateString()
  @IsNotEmpty()
  releasedDate: Date;

  @IsDateString()
  @IsNotEmpty()
  duration: Date;

  @IsString()
  @IsOptional()
  lyrics?: string;

  album?: string;
}
