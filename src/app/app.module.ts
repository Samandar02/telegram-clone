import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagesComponent } from './messages/messages.component';
import { SummaryPipe } from './summary.pipe';
import { StoreModule } from '@ngrx/store';
//import { storageReducer, userReducer } from './storage.reducers';
import { FormsModule } from '@angular/forms';
import { StorageService } from './storage.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactsComponent,
    MessagesComponent,
    SummaryPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
   // StoreModule.forRoot({users:userReducer,messages:storageReducer})
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
