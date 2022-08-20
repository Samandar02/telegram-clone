import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Message, User } from '../models/message';
import { getMessages } from '../storage.actions';
import { StorageService } from '../storage.service';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers:[StorageService]
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<User[]>
  message: string = '';
  constructor(private router: Router, private storeageSvc:StorageService) {
    this.contacts$ = storeageSvc.getUsers()
  }

  ngOnInit(): void {
  }
  getMessage(id: number) {
    this.storeageSvc.sendMessage(id,this.message)
    this.router.navigate([],{queryParams:{id:id}});
  }
}
