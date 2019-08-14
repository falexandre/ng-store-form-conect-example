import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './store';
import { ConnectFormDirective } from './directives/connect-form.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PersonComponent } from './components/person/person.component';
import { DocumentComponent } from './components/document/document.component';
import { ContractComponent } from './components/contract/contract.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectFormDirective,
    PersonComponent,
    DocumentComponent,
    ContractComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
