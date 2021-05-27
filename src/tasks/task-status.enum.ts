export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export class TaskEntity {
  static getAllowedStatuses(): string[] {
    return Object.keys(TaskStatus).map((key) => TaskStatus[key]);
  }
}
