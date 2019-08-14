import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdmissionActionUpdateForm } from '../../store/admission.reducer';

@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  public form = this.formBuilder.group({
    cpf: [undefined],
    rg: [undefined],
  });

  public actionForm = AdmissionActionUpdateForm;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

}
