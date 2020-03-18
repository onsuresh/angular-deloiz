import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'
import { AccountComponent } from './account/account.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ServerComponent, AccountComponent ],
  bootstrap:    [ AppComponent ]  
})
export class AppModule { }
