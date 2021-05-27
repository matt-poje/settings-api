import {
  IsEnum,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { TaskStatus, TaskEntity } from '../task-status.enum';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn(TaskEntity.getAllowedStatuses())
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  search?: string;
}
