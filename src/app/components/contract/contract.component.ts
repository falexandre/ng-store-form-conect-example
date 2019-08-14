import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdmissionActionUpdateForm } from '../../store/admission.reducer';

@Component({
  selector: 'contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  public form = this.formBuilder.group({
    hireDate: [undefined, Validators.required],
    registernumber: [undefined],
  });

  public actionForm = AdmissionActionUpdateForm;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

}
