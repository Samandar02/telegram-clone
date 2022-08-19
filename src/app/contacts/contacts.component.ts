import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Message, User } from '../models/message';
import { getMessages } from '../storage.actions';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts$:Observable<User[]>
  constructor(private store:Store<{users:User[],messages:Message[]}>) {
    this.contacts$ = store.select("users");
   }

  ngOnInit(): void {
  }
  getMessage(id:number){
    this.store.dispatch(getMessages({id:id}));
  }
}
