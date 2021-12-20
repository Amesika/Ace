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
    this.act = new Activity();
  }

  @Input() act: Activity;
  @Output() dataEvent = new EventEmitter<void>();

  ngOnInit(): void {
  }

  delete() {
    if (this.act)
      this.actSrv.deleteActivity(this.act.id).subscribe(data => {
        console.log(data);
        this.dataEvent.emit();
      });
  }

}
