import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.css']
})
export class DeleteFormComponent implements OnInit {

  constructor(private actSrv: ActivityService,) {
  }

  @Input() data: any;
  @Output() dataEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  delete() {
    if (this.data)
        this.dataEvent.emit(this.data);
    
  }

}
