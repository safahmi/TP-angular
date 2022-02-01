import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OperationRecord } from '../models/operation-record.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  operationRecordArray: Array<OperationRecord>;

  calcFormGroup = this.formBuilder.group({
    numOne: [null, Validators.required],
    numTwo: [null, Validators.required],
    operator: ['+', Validators.required],
  });
  resultat = 0;

  constructor(public formBuilder: FormBuilder) {
    this.operationRecordArray = [];
  }

  ngOnInit(): void {}

  calculate(event: any): void {
    event.preventDefault();

    if (
      this.calcFormGroup.get('numOne')?.value === null ||
      this.calcFormGroup.get('numTwo')?.value === null ||
      (this.calcFormGroup.get('numTwo')?.value == 0 &&
        this.calcFormGroup.get('operator')?.value == '/')
    ) {
      return;
    }

    this.resultat = eval(
      this.calcFormGroup.get('numOne')?.value +
        this.calcFormGroup.get('operator')?.value +
        this.calcFormGroup.get('numTwo')?.value
    );

    const currentOperationRecord: OperationRecord = {
      date: new Date(),
      operation:
        this.calcFormGroup.get('numOne')?.value +
        ' ' +
        this.calcFormGroup.get('operator')?.value +
        ' ' +
        this.calcFormGroup.get('numTwo')?.value,
      resultat: this.resultat,
    };
    this.operationRecordArray.push(currentOperationRecord);
  }

  deleteSelectedOperationRecord(operationRecordIndex: number) {
    this.operationRecordArray.splice(operationRecordIndex, 1);
  }
}
