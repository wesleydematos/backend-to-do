import { IsNotEmpty, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;
  userId: number;
}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsOptional()
  completed?: boolean;
}
