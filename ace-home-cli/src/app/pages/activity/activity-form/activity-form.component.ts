import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { Bank } from '../../bank/models/bank';
import { BankService } from '../../bank/services/bank.service';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit, OnChanges {



  activityForm: FormGroup;
  banks: Bank[] = [];
  bankDefault: Bank | undefined = new Bank;


  @Input() data: Activity;
  @Input() option: number;

  @Output() dataEvent = new EventEmitter<void>();

  constructor(private bankSrv: BankService, private formBuilder: FormBuilder, private actSrv: ActivityService, private router: Router) {
    this.activityForm = this.formBuilder.group({});
    this.data = new Activity();
    this.option = 0;
  }

  ngOnInit(): void {
    this.initForm();
    this.getBanks();
    console.log('ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initForm();
  }

  initForm() {

    console.log("initForm");

    if (this.data == undefined || this.data.id == 0) {
      this.activityForm = this.formBuilder.group({
        description: ["", Validators.required],
        type: "source",
        bank: this.bankDefault,
        amount: 0,
        date: ["", Validators.required],
        note: ""
      });
    } else {
      this.activityForm = this.formBuilder.group({
        description: [this.data.description, Validators.required],
        type: this.data._type,
        amount: this.data.amount,
        date: [this.data._date, Validators.required],
        bank: this.bankDefault,
        note: this.data.note
      });

      if (this.data.bankDto)
        this.activityForm.patchValue({
          bank: this.banks.find((bank) => bank.id == this.data.bankDto?.id),
        })

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
      formValue['bank'],
      formValue['date'],
    );

    if (this.option == 1)
      newActivity.id = this.data.id;
    //this.ActivityService.addActivity(newActivity);

    this.actSrv.postActivity(newActivity).subscribe(data => {
      console.log(data);
      this.dataEvent.emit();
    })
  }

  getBanks() {
    this.bankSrv.getBanks().subscribe((banks) => {
      this.banks = banks.filter((bank) => bank.name != "Pas de banque !");
      this.bankDefault = banks.find((bank) => bank.name == "Pas de banque !");
    })
  }
}
