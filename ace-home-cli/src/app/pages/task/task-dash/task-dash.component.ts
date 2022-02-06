import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { TaskPriority } from '../models/task-property';
import { TaskStatus } from '../models/task-status';

@Component({
    selector: 'app-task-dash',
    templateUrl: './task-dash.component.html',
    styleUrls: ['./task-dash.component.scss'],
    providers: [MessageService,ConfirmationService]
})
export class TaskDashComponent implements OnInit {

    taskDialog!: boolean;
    submitted!: boolean;
    selectedTasks!: Array<Task>
    tasks$!: Observable<any>;
    task!: Task;
    items!: any[];
    priorities = [
        { name: "Basse", key: TaskPriority.BASSE, keystr: 'BASSE' },
        { name: "Normal", key: TaskPriority.NORMAL, keystr: 'NORMAL' },
        { name: "Importent", key: TaskPriority.IMPORTENT, keystr: 'IMPORTENT' },
        { name: "Urgent", key: TaskPriority.URGENT, keystr: 'URGENT' },
        { name: "UI", key: TaskPriority.URGENT_IMPORTENT, keystr: 'URGENT_IMPORTENT' }
    ];

    status = [
        { name: "A faire", key: TaskStatus.A_FAIRE, keystr: 'A_FAIRE' },
        { name: "En cours", key: TaskStatus.EN_COURS, keystr: 'EN_COURS' },
        { name: "Terminer", key: TaskStatus.TERMINER, keystr: 'TERMINER' },
    ];

    priority!: any;
    st!: any;

    constructor(private taskSrv: TaskService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

    ngOnInit(): void {
        this.tasks$ = this.taskSrv.getTasks();
    }

    handleUpdate(task: Task) {
        this.task = { ...task };
        this.priority = this.priorities.find((p) => p.keystr == task.priority.toString());
        this.st = this.status.find((s) => s.keystr == task.status.toString());
        this.taskDialog = true;
    }

    handleDelete(task: Task) {
        console.log('handleDelete')
        console.log(task)
        this.confirmationService.confirm({
            message: 'Etes-vous sûr que vous voulez supprime ' + task.title + '?',
            header: 'Confirmer',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.taskSrv.delete(task.id).subscribe((rep) => {
                    if (rep){
                        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'La tâche est supprimé.', life: 3000 });
                        this.tasks$ = this.taskSrv.getTasks();
                    }                       
                })
                this.task = {} as Task;
            }
        });
    }

    openNew() {
        this.task = {} as Task;
        this.submitted = false;
        this.taskDialog = true;
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
                this.task.status = this.st.key;
                this.taskSrv.putTask(this.task).subscribe((data) => {
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'La tâche est mise à jour', life: 3000 });
                    this.tasks$ = this.taskSrv.getTasks();
                });
            }
            else {
                this.taskSrv.postTask(this.task).subscribe((data) => {
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'La tâche est créée', life: 3000 });
                    this.tasks$ = this.taskSrv.getTasks();
                });
            }
            this.task = {} as Task;
            this.taskDialog = false;
        }
    }
}


