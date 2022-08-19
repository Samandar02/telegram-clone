import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { InfoComponent } from './info/info.component';
import { MessagesComponent } from './messages/messages.component';
import { SummaryPipe } from './summary.pipe';
import { StoreModule } from '@ngrx/store';
import { storageReducer, userReducer } from './storage.reducers';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactsComponent,
    InfoComponent,
    MessagesComponent,
    SummaryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({users:userReducer,messages:storageReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
