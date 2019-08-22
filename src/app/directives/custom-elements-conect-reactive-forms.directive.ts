import { Directive, HostListener, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[elementFormControlName]',
})
export class CustomElementsConectReactiveFormsDirective {

  @Input('elementFormControlName') elementFormControlName;

  @HostListener('model', ['$event.detail']) onClick(value) {
    this.formGroupDirective.form.get(this.elementFormControlName).setValue(value);
    this.formGroupDirective.form.get(this.elementFormControlName).markAsDirty();
  }

  constructor(private formGroupDirective: FormGroupDirective) {
  }

}
