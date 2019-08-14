import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { PersonComponent } from './components/person/person.component';
import { ContractComponent } from './components/contract/contract.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(PersonComponent, {static: false}) personComponent: PersonComponent;
  @ViewChild(ContractComponent, {static: false}) contractComponent: ContractComponent;

  formData: any;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>) {
  }

  ngOnInit() {
    this.store.select('form')
      .subscribe(data => this.formData = data);
  }

  submit() {
    console.log(this.formData, 'Parametros a ser enviado!');
    console.log(this.personComponent.form.valid, 'Employee Tá válido');
    console.log(this.contractComponent.form.valid, 'Contrato Tá válido');
    if( this.personComponent.form.invalid ) {
      alert("Componente employee está inválido");
    }
    if( this.contractComponent.form.invalid ) {
      alert("Componente Contrato está inválido");
    }
  }
}
