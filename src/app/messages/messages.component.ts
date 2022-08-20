import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMessage, Message } from '../models/message';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages$:Observable<any>
  public message:any;
  constructor(private store:Store<{messages:IMessage}>) {
    this.messages$ = store.select("messages");
    this.messages$.subscribe(res=>{
      console.log(res);
      
    })
   }
   sendMessage(){
    console.log(this.message)
    this.message = ""
   }
  ngOnInit(): void {
  }

}
