import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMessage, Message } from '../models/message';
import { sendMessage } from '../storage.actions';
import { StorageService } from '../storage.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages$:Observable<any>
  selectedUserId:number = -1;
  public message:any;
  constructor(private storageSvc:StorageService,private router:ActivatedRoute) {
    this.messages$ = new Observable()
    this.router.queryParamMap.subscribe(res=>{
      this.selectedUserId = Number(res.get('id'));
      this.messages$ = storageSvc.getMessage(this.selectedUserId);

    })
   }
   sendMessage(){
    console.log(this.message)
    this.storageSvc.sendMessage(this.selectedUserId,this.message)
    this.message = ""
   }
  ngOnInit(): void {
  }

}
