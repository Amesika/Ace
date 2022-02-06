import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
  providers: [MessageService]
})
export class ActionComponent implements OnInit {

  @Output() eventUpdate = new EventEmitter()
  @Output() eventDelete = new EventEmitter()

  items!: any[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.items = [{
      label: 'Update',
      icon: 'pi pi-refresh',
      key: 0
    },
    {
      label: 'Delete',
      icon: 'pi pi-times',
      key: 1
    }
    ]
  };

  emit(key: number) {
    switch (key) {
      case 0:
        this.eventUpdate.emit()
        break;
      case 1:
        this.eventDelete.emit()
        break;
    }
  }
}



