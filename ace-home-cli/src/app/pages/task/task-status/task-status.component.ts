import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.scss']
})
export class TaskStatusComponent implements OnInit {

  @Input() value!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
