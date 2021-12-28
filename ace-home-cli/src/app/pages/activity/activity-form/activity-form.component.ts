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

  @Input() data: Activity;
  @Input() option: number;

  @Output() dataEvent = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder, private actSrv: ActivityService,private router: Router) {
    this.activityForm = this.formBuilder.group({});
    this.data = new Activity();
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
    
    if (this.data == undefined || this.data.id == 0) {
      this.activityForm = this.formBuilder.group({
        description:  ["", Validators.required],
        type: "source",
        amount: 0,
        date: ["", Validators.required],
        note: ""
      });
    } else {
      this.activityForm = this.formBuilder.group({
        description:[this.data.description, Validators.required],
        type: this.data._type,
        amount: this.data.amount,
        date: [this.data._date, Validators.required],
        note: this.data.note
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
      newActivity.id = this.data.id;

    console.log(this.data);
    console.log(newActivity);
    //this.ActivityService.addActivity(newActivity);
   
    /*this.actSrv.postActivity(newActivity).subscribe(data => {
      console.log(data);
      this.dataEvent.emit();
    });*/
  }


}
