import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-task-dash',
  templateUrl: './task-dash.component.html',
  styleUrls: ['./task-dash.component.scss'],
  providers: [MessageService]
})
export class TaskDashComponent implements OnInit {
  
  selectedTasks!: Array<Task>
  tasks$!: Observable<any>;
  items!: any[];

  constructor(private taskSrv: TaskService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.tasks$ = this.taskSrv.getTasks();
    this.items = [{
      label: 'Options',
      items: [{
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
              this.update();
          }
      },
      {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      }
      ]},
      {
          label: 'Navigate',
          items: [{
              label: 'Angular',
              icon: 'pi pi-external-link',
              url: 'http://angular.io'
          },
          {
              label: 'Router',
              icon: 'pi pi-upload',
              routerLink: '/fileupload'
          }
      ]}
  ];
  }

  editProduct(task: Task) {

  }
  deleteProduct(task: Task) {

  }

  openNew(){

  }
  deleteSelectedTasks(){

  }

  update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
}

delete() {
    this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
}
}


