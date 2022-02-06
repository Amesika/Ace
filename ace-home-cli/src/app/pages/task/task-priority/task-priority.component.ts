import { Component, Input, OnInit } from '@angular/core';
import { TaskPriority } from '../models/task-property';

@Component({
  selector: 'app-task-priority',
  templateUrl: './task-priority.component.html',
  styleUrls: ['./task-priority.component.scss']
})
export class TaskPriorityComponent implements OnInit {


  public taskPriority = TaskPriority;

  @Input() value!:string;

  constructor() { }

  ngOnInit(): void {
  }
  

}
