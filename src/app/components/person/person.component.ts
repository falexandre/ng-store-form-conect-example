import { Component, OnInit } from '@angular/core';
import { AdmissionActionUpdateForm } from '../../store/admission.reducer';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  public form = this.formBuilder.group({
    name: [undefined, Validators.required],
    email: [undefined],
  });

  public actionForm = AdmissionActionUpdateForm;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }


}
