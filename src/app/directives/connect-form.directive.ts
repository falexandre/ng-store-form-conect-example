import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';

@Directive({
  selector: '[connectForm]'
})
export class ConnectFormDirective {
  @Input('connectForm')
  set data(action: any) {
    if (action) {
      this.formGroupDirective.form.valueChanges
        .subscribe(value => {
          if (value) {
            this.store.dispatch(new action(value));
          }
        });
    }
  }

  constructor(private formGroupDirective: FormGroupDirective, private store: Store<any>) {
  }

}
