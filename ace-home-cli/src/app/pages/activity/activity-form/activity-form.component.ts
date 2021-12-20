import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit, OnChanges {



  activityForm: FormGroup;

  @Input() act: Activity;
  @Input() option: number;

  @Output() dataEvent = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder, private actSrv: ActivityService,private router: Router) {
    this.activityForm = this.formBuilder.group({});
    this.act = new Activity();
    this.option = 0;
  }

  ngOnInit(): void {
    this.initForm();
    console.log('ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initForm();
  }

  initForm() {

    console.log("initForm");
    if (this.act.id == 0) {
      this.activityForm = this.formBuilder.group({
        description:  ["", Validators.required],
        type: "source",
        amount: 0,
        date: ["", Validators.required],
        note: ""
      });
    } else {
      this.activityForm = this.formBuilder.group({
        description:[this.act.description, Validators.required],
        type: this.act._type,
        amount: this.act.amount,
        date: [this.act._date, Validators.required],
        note: this.act.note
      });
      console.log(this.activityForm)
    }
  }

  onSubmitForm() {
    console.log('onSubmitForm')
    const formValue = this.activityForm.value;
    const newActivity = new Activity(
      formValue['description'],
      formValue['amount'],
      formValue['note'],
      formValue['type'],
      formValue['date'],
    );

    if (this.option == 1)
      newActivity.id = this.act.id;

    console.log(this.act);
    console.log(newActivity);
    //this.ActivityService.addActivity(newActivity);
   
    this.actSrv.postActivity(newActivity).subscribe(data => {
      console.log(data);
      this.dataEvent.emit();
    });
  }


}
