import { TaskPriority } from "./task-property";
import { TaskStatus } from "./task-status";

export class Task {
    id!: number;
    title!: string;
    comment!: string;
    priority!: TaskPriority;
    status!: TaskStatus;
    startDate!: string;
    progess!:number;
}