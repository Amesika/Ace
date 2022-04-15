import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bank } from '../models/bank';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css']
})
export class BankFormComponent implements OnInit {

  bankForm!: FormGroup;

  @Input() data!: Bank;
  @Input() option!: number;

  @Output() dataEvent = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder, private bankSrv: BankService, private router: Router) {
    this.bankForm = this.formBuilder.group({});
    this.data = new Bank();
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initForm();
  }

  initForm() {
    if (this.data == undefined || this.data.id == 0) {
      this.bankForm = this.formBuilder.group({
        description: [""],
        name: ["", Validators.required],
        number: ["", Validators.required],
      });
    } else {
      this.bankForm = this.formBuilder.group({
        description: [this.data.description],
        name: [this.data.name, Validators.required],
        number: [this.data.number, Validators.required],
      });
    }
  }

  onSubmitForm() {
    const formValue = this.bankForm.value;
    const newBank = new Bank;

    newBank.description = formValue['description'];
    newBank.name = formValue['name'];
    newBank.number = formValue['number'];

    if (this.option == 1)
      newBank.id = this.data.id;

    this.bankSrv.postBank(newBank).subscribe(data => {
      console.log(data);
      this.dataEvent.emit();
    })

  }

}
