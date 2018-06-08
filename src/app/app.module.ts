import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetingMessage } from './greeting-message/greeting-message.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingMessage
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
