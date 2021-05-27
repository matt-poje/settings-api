import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskEntity } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = TaskEntity.getAllowedStatuses();

  private isStatusValid(status: any) {
    return this.allowedStatuses.includes(status);
  }

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`Status: ${value} is not valid.`);
    }

    return value;
  }
}
