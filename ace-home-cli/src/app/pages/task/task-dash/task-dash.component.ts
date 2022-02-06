import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { TaskPriority } from '../models/task-property';

@Component({
    selector: 'app-task-dash',
    templateUrl: './task-dash.component.html',
    styleUrls: ['./task-dash.component.scss'],
    providers: [MessageService]
})
export class TaskDashComponent implements OnInit {

    taskDialog!: boolean;
    submitted!: boolean;
    selectedTasks!: Array<Task>
    tasks$!: Observable<any>;
    task!: Task ;
    items!: any[];
    priorities = [
        {name:"Basse",key:TaskPriority.BASSE},
        {name:"Normal",key:TaskPriority.NORMAL},
        {name:"Importent",key:TaskPriority.IMPORTENT},
        {name:"Urgent",key:TaskPriority.URGENT},
        {name:"UI",key:TaskPriority.URGENT_IMPORTENT}
    ];

    priority!:any;

    constructor(private taskSrv: TaskService, private messageService: MessageService) { }

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
            ]
        },
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
            ]
        }
        ];
    }

    editProduct(task: Task) {

    }
    deleteProduct(task: Task) {

    }

    openNew() {
        this.task = {} as Task;
        this.submitted = false;
        this.taskDialog = true;
    }
    deleteSelectedTasks() {

    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }
    hideDialog() {
        this.taskDialog = false;
        this.submitted = false;
    }
    saveTask() {
        this.submitted = true;
        this.task.priority = this.priority.key;
        if (this.task.title.trim()) {
            if (this.task.id) {
                //this.tasks[this.findIndexById(this.task.id)] = this.task;                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
            }
            else {
                this.taskSrv.postTask(this.task).subscribe((data)=>{
                    this.messageService.add({severity:'success', summary: 'Successful', detail: 'La tâche est créée', life: 3000});
                    this.tasks$ = this.taskSrv.getTasks();
                });     
            }
            this.task = {} as Task;
            this.taskDialog = false;
        }
    }
}


