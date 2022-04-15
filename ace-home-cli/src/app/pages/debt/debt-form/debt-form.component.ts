import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Debt } from 'src/app/models/debt';
import { DebtService } from 'src/app/services/debt.service';

@Component({
  selector: 'app-debt-form',
  templateUrl: './debt-form.component.html',
  styleUrls: ['./debt-form.component.css']
})
export class DebtFormComponent implements OnInit {

  debtForm: FormGroup;

  @Input() data: Debt;
  @Input() option: number;

  @Output() dataEvent = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder, private debtSrv: DebtService, private router: Router) {
    this.debtForm = this.formBuilder.group({});
    this.data = new Debt();
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
    console.log(this.data);

    if (this.data == undefined || this.data.id == 0) {

      this.debtForm = this.formBuilder.group({
        name: ["", Validators.required],
        description: ["", Validators.required],
        creditorName: ["", Validators.required],
        initAmount: [0, Validators.required],
        currentAmount: [0, Validators.required],
        paymentAmount: [0, Validators.required],
        rate: [0, Validators.required],
      });

      console.log(this.debtForm)
    } else {
      this.debtForm = this.formBuilder.group({
        name: [this.data.name, Validators.required],
        description: [this.data.description, Validators.required],
        creditorName: [this.data.creditorName, Validators.required],
        initAmount: [this.data.initAmount, Validators.required],
        currentAmount: [this.data.currentAmount, Validators.required],
        paymentAmount: [this.data.paymentAmount, Validators.required],
        rate: [this.data.rate, Validators.required],
      });
      console.log(this.debtForm)
    }
  }

  onSubmitForm() {
    console.log('onSubmitForm')
    const formValue = this.debtForm.value;
    const newDebt = new Debt
    newDebt.name = formValue['name'];
    newDebt.description = formValue['description'];
    newDebt.creditorName = formValue['creditorName'];
    newDebt.initAmount = formValue['initAmount'];
    newDebt.currentAmount = formValue['currentAmount'];
    newDebt.paymentAmount = formValue['paymentAmount'];
    newDebt.rate = formValue['rate'];


    if (this.option == 1)
      newDebt.id = this.data.id;

    console.log(formValue);
    console.log(newDebt);
    //this.DebtService.addDebt(newDebt);

    this.debtSrv.postDebt(newDebt).subscribe(data => {
      console.log(data);
      this.dataEvent.emit();
    });
  }

}
