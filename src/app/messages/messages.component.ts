import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages$:Observable<Message>
  constructor(private store:Store<{messages:Message}>) {
    this.messages$ = store.select("messages");
    console.log("select message")
   }

  ngOnInit(): void {
  }

}
