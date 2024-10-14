import { IsOptional, IsUUID, IsString, IsNumber } from 'class-validator';

export class CreateUserInfoDto {
  @IsUUID()
  user_id: string;

  @IsOptional()
  @IsString()
  father_name?: string;

  @IsOptional()
  @IsString()
  samarga_id?: string;

  @IsOptional()
  @IsString()
  current_school_name?: string;

  @IsOptional()
  @IsString()
  current_school_address?: string;

  @IsOptional()
  @IsString()
  current_school_district?: string;

  @IsOptional()
  @IsNumber()
  current_class?: number;

  @IsOptional()
  previous_year_marks?: number;

  @IsOptional()
  @IsString()
  student_type?: string;

  @IsOptional()
  @IsString()
  aadhar?: string;

  @IsOptional()
  @IsString()
  caste?: string;

  @IsOptional()
  income?: number;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsOptional()
  @IsString()
  disability?: string;

  @IsOptional()
  @IsString()
  status?: string;
}
