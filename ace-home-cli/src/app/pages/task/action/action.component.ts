import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
  providers: [MessageService]
})
export class ActionComponent implements OnInit {

  items!: any[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.items = [{
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
  };

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
  }

  save(severity: string) {
    this.messageService.add({severity:severity, summary:'Success', detail:'Data Saved'});
}

}



