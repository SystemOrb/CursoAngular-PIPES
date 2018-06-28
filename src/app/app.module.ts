import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PipeCapitalizado} from './pipes/capitalizado.pipe';
import { AppComponent } from './app.component';
import { SecureDomPipe } from './pipes/secure-dom.pipe';
import { AsteriskPipe } from './pipes/asterisk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeCapitalizado,
    SecureDomPipe,
    AsteriskPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
