import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EquationComponent } from './equation/equation.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { AnswerHighLightDirective } from './answer-high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    EquationComponent,
    RxjsDemoComponent,
    AnswerHighLightDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
