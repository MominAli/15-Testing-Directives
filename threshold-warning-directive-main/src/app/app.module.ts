import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThresholdWarningDirective } from './threshold-warning.directive';

@NgModule({
  declarations: [
    AppComponent, ThresholdWarningDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
